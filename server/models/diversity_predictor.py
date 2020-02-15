import pandas as pd
import numpy as np
import statsmodels.api as sm
import matplotlib.pyplot as plt
import seaborn as sns


from sklearn import linear_model
df = pd.read_csv('/Users/brody.jackson/Desktop/07-taxa/100nt/ag-cleaned_L2.txt', delimiter="\t", low_memory=False)

predictive_columns = [
    'AGE_YEARS',
    # 'HEIGHT_CM',
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

for column in categorical_columns:
    df[column] = df[column].astype('category')
    df[f'{column}_cat'] = df[column].cat.codes
    predictive_columns.append(f'{column}_cat')

test = df['ANTIBIOTIC_HISTORY_cat']

for column in predictive_columns:
    df = df[~df[column].isin(['Unknown', 'Unspecified'])]

target = pd.DataFrame(df['k__Bacteria;p__Proteobacteria'])

df[predictive_columns] = df[predictive_columns].apply(pd.to_numeric, errors='coerce', axis=1)

df = df.fillna(df.mean())
print(pd.get_dummies(df['ANTIBIOTIC_HISTORY']))
X = df[predictive_columns]
Y = pd.to_numeric(target['k__Bacteria;p__Proteobacteria'], errors='coerce')

model = sm.OLS(Y, X, missing='drop').fit()
predictions = model.predict(X)
print(model.summary())
print(predictions)

fig = plt.figure()
# fig.subplots_adjust(left=None, right=None, , wspace=None, hspace=None )
# fig.tight_layout()

i = 1
for column in predictive_columns:
    axis = fig.add_subplot(3,3,i)
    axis.yaxis.label.set_visible(False)
    sns.regplot(x=df[column], y=df['k__Bacteria;p__Proteobacteria'], ax=axis, marker=".")
    i += 1


lm = linear_model.LinearRegression()
skmodel = lm.fit(X,Y)
skpredictions = lm.predict(X)
print(skpredictions[0:5])
print(lm.score(X,Y))

# exit(0)
# print(df['k__Bacteria;p__Verrucomicrobia'])