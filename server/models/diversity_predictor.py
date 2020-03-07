import pandas as pd
import numpy as np
import statsmodels.api as sm
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn import linear_model
import pickle

predictive_columns = [
    'AGE_YEARS',
    'WEIGHT_KG',
    'VIOSCREEN_VEGETABLE_SERVINGS',
    'VIOSCREEN_FRUIT_SERVINGS',
    'VIOSCREEN_ALCOHOL_SERVINGS',
    'VIOSCREEN_CALORIES',
    'VIOSCREEN_TOTSUGAR',
    'VIOSCREEN_FAT',
    'VIOSCREEN_PROTEIN',
    'VIOSCREEN_CARBO'
]

categorical_columns = [
    'FERMENTED_PLANT_FREQUENCY',
    'SMOKING_FREQUENCY',
    'ANTIBIOTIC_HISTORY',
    'EXERCISE_FREQUENCY',
    'SLEEP_DURATION'
]

categorical_column_partitions = {
    'FERMENTED_PLANT_FREQUENCY_low': [1, 3],
    'FERMENTED_PLANT_FREQUENCY_high': [0, 2, 4],
    'SMOKING_FREQUENCY_low': [1],
    'SMOKING_FREQUENCY_high': [0, 2, 3, 4],
    'ANTIBIOTIC_HISTORY_low': [1],
    'ANTIBIOTIC_HISTORY_high': [0, 2, 3, 4],
    'EXERCISE_FREQUENCY_low': [1, 3],
    'EXERCISE_FREQUENCY_high': [0, 2, 4],
    'SLEEP_DURATION_low': [4, 0, 1],
    'SLEEP_DURATION_high': [2, 3]
}

predictive_target_columns = [
    'k__Bacteria;p__Proteobacteria',
    'k__Bacteria;p__Actinobacteria',
    'k__Bacteria;p__Bacteroidetes',
    'k__Bacteria;p__Cyanobacteria',
    'k__Bacteria;p__Firmicutes',
    'k__Bacteria;p__Tenericutes',
    'k__Bacteria;p__Verrucomicrobia',
    'k__Bacteria;p__Fusobacteria'
]

lifestyle_factor_averages = {}
phylum_diversity_averages = {}


def generate_figures(target, df):
    fig = plt.figure(target)
    i = 1
    for column in predictive_columns:
        axis = fig.add_subplot(3, 5, i)
        axis.yaxis.label.set_visible(False)
        sns.regplot(x=df[column], y=df[target], ax=axis, marker=".")
        i += 1
    plt.show()


def generate_models():
    df = pd.read_csv('/Users/brody.jackson/Desktop/07-taxa/100nt/ag-cleaned_L2.txt', delimiter="\t", low_memory=False)

    for column in categorical_columns:
        df = df[~df[column].isin(['Unknown', 'Unspecified'])]
        df[column] = df[column].astype('category')
        # test will create dict with the mappings of category to type
        # test = dict(zip(df[column].cat.codes, df[column]))
        df[f'{column}_cat'] = df[column].cat.codes
        df[f'{column}_cat'] = df[f'{column}_cat'].apply(
            lambda x: 0 if x in categorical_column_partitions[f'{column}_low'] else (1 if x in categorical_column_partitions[f'{column}_high'] else x))
        predictive_columns.append(f'{column}_cat')

    for column in predictive_columns:
        df = df[~df[column].isin(['Unknown', 'Unspecified'])]

    df[predictive_columns] = df[predictive_columns].apply(pd.to_numeric, errors='coerce', axis=1)
    df = df.fillna(df.mean())
    X = df[predictive_columns]

    for column in predictive_columns:
        if 'cat' in column:
            lifestyle_factor_averages[column] = df[column].mean().round(0)
        else:
            lifestyle_factor_averages[column] = df[column].mean()

    regression_models = {}
    for target in predictive_target_columns:
        target_data = pd.DataFrame(df[target])
        Y = pd.to_numeric(target_data[target], errors='coerce')
        phylum_diversity_averages[target] = Y.mean()

        model = sm.OLS(Y, X, missing='drop').fit()
        regression_models[target] = model

        predictions = model.predict(X)
        print(predictions)
        # print(model.params)
        # print(model.summary())
        # print(predictions)

        generate_figures(target, df)


    predictive_layer_results = {
        'individual_regression_models': regression_models,
        'lifestyle_factor_averages': lifestyle_factor_averages,
        'phylum_averages': phylum_diversity_averages
    }

    with open('diversity_model.pickle', 'wb') as handle:
        pickle.dump(predictive_layer_results, handle, protocol=pickle.HIGHEST_PROTOCOL)
    return


if __name__ == '__main__':
    generate_models()
    exit(0)
