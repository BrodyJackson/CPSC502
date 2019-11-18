import lifestyleconfig


def diversity_calculation(lifestyle_factor):
    config = lifestyleconfig.lifestyle_effects["{0}".format(lifestyle_factor['attribute'])]
    impact_scale = config['impact_scale']
    series = []
    scaled_change_amount = 50
    if lifestyle_factor['type'] == 'slider':
        print(lifestyle_factor, ' lifestyle_factor')
        print(lifestyle_factor['value'])
        print(lifestyle_factor['maxValue'])
        slider_level = (lifestyle_factor['value']) / (lifestyle_factor ['maxValue'])
        print(slider_level, ' slider level')
        main_change_amount = slider_level * 50
        print(main_change_amount, ' main_change')
        scaled_change_amount = impact_scale * main_change_amount
        print(scaled_change_amount)
    elif lifestyle_factor['type'] == 'select':
        select_option = lifestyle_factor['value']
        scaled_change_amount = scaled_change_amount * impact_scale
    elif lifestyle_factor['type'] == 'checkbox':
        number_checked = lifestyle_factor['value']
        scale_amount = impact_scale * number_checked
        scaled_change_amount = scaled_change_amount * scale_amount
    print(config, ' config here')
    print(scaled_change_amount, ' change amount here')
    for genus in config:
        print(genus)
        print(config['{0}'.format(genus)])
        value = 50
        if config['{0}'.format(genus)] == 'increase':
            value = value + scaled_change_amount
        elif config['{0}'.format(genus)] == 'decrease':
            value = value - scaled_change_amount
        series.append({'x': genus, 'y': value})
    return series


def determine_diversity_scores(params):
    print('in first call ', params )
    heatmap_data = []
    for entry in params:
        print('entry is ', entry)
        lifestyle_element = lifestyleconfig.lifestyle_effects["{0}".format(entry['attribute'])]
        series_entry = {'name':'{0}'.format(entry['attribute']), 'data': diversity_calculation(entry)}
        heatmap_data.append(series_entry)
    return heatmap_data



