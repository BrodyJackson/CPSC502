import lifestyleconfig
import models.diversity_predictor
import attributeMaps

from models import diversity_predictor


def handle_incoming_params(params):
    total_protein = 0
    total_fat = 0
    parsed_entries = []
    for entry in params:
        if 'protein' in entry['attribute']:
            total_protein += entry['value']
            continue
        if 'fat' in entry['attribute']:
            total_fat += entry['value']
            continue
        parsed_entries.append(entry)
    parsed_entries.append({
        'attribute':'protein',
        'value': f'{total_protein}',
        'maxValue': '100',
        'type':'slider'
    })
    parsed_entries.append({
        'attribute': 'fat',
        'value':f'{total_fat}',
        'maxValue': '100',
        'type': 'slider'
    })
    print(parsed_entries, ' params after being formatted')
    return parsed_entries


def diversity_calculation(lifestyle_factor):
    config = lifestyleconfig.lifestyle_effects["{0}".format(lifestyle_factor['attribute'])]
    impact_scale = config['impact_scale']
    series = []
    scaled_change_amount = 50
    if lifestyle_factor['type'] == 'slider' or lifestyle_factor['type'] == 'checkbox':
        print(lifestyle_factor, ' lifestyle_factor')
        slider_level = (float(lifestyle_factor['value'])) / float((lifestyle_factor['maxValue']))
        print(slider_level, ' slider level')
        main_change_amount = slider_level * 50
        print(main_change_amount, ' main_change')
        scaled_change_amount = impact_scale * main_change_amount
        print(scaled_change_amount)
    elif lifestyle_factor['type'] == 'select':
        select_option = lifestyle_factor['value']
        scaled_change_amount = scaled_change_amount * impact_scale
    print(config, ' config here')
    print(scaled_change_amount, ' change amount here')
    for genus in config:
        if genus != 'impact_scale':
            print(genus)
            print(config['{0}'.format(genus)])
            value = 50
            if config['{0}'.format(genus)] == 'increase':
                value = value + scaled_change_amount
            elif config['{0}'.format(genus)] == 'decrease':
                value = value - scaled_change_amount
            series.append({'x': genus, 'y': value})
    return series

# TODO: Figure out the categorical variables within here
def diversity_calculation_new(lifestyle_factor, predictive_results):
    series = []
    print(predictive_results['individual_regression_models'], ' regressions')
    print(predictive_results['lifestyle_factor_averages'], ' lifestyle averages')
    print(predictive_results['phylum_averages'], ' phylum averages')
    attribute_map = attributeMaps.ui_to_model_attribute_map
    for phylum in predictive_results['individual_regression_models']:
        regression_coefficients = predictive_results['individual_regression_models'][phylum].params
        print(regression_coefficients, ' coefficients')
        phylum_average_diversity = predictive_results['phylum_averages'][phylum]
        lifestyle_factor_average = predictive_results['lifestyle_factor_averages']

        attribute_average = lifestyle_factor_average[attribute_map[lifestyle_factor['attribute']]]
        unit_change_from_average = abs(float(lifestyle_factor['value']) - attribute_average)

        change_from_avg = regression_coefficients[attribute_map[lifestyle_factor['attribute']]] * unit_change_from_average

        percentage_change = change_from_avg / phylum_average_diversity
        diversity_change = 50 * percentage_change
        value = 50 + diversity_change
        print(percentage_change, ' percentage_change')
        print(diversity_change, ' diversity')
        print(value, ' value')
        print(phylum)
        print(phylum[-1])
        series.append({'x': phylum.replace('k__Bacteria;p__', '', 1), 'y': value})

    print(series, 'return series')
    return series


def determine_diversity_scores(params):
    print('in first call ', params)
    heatmap_data = []
    for entry in params:
        print('entry is ', entry)
        lifestyle_element = lifestyleconfig.lifestyle_effects["{0}".format(entry['attribute'])]
        series_entry = {'name':'{0}'.format(entry['attribute']), 'data': diversity_calculation(entry)}
        heatmap_data.append(series_entry)
    return heatmap_data


def determine_diversity_new(params):
    predictive_layer_results = diversity_predictor.generate_models()
    normalized_params = handle_incoming_params(params)
    heatmap_data = []
    for entry in normalized_params:
        if entry['attribute'] in attributeMaps.ui_to_model_attribute_map:
            # TODO: remove this check one the select values are working with new diversity function
            if entry['value'] != '':
                print('entry is ', entry)
                series_entry = {'name':'{0}'.format(entry['attribute']), 'data': diversity_calculation_new(entry, predictive_layer_results)}
                heatmap_data.append(series_entry)
    return heatmap_data

if __name__ == '__main__':
    determine_diversity_new()

