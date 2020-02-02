import pandas as pd
import numpy as np
import statsmodels.api as sm

df = pd.read_csv('/Users/brody.jackson/Desktop/07-taxa/100nt/ag-cleaned_L2.txt', delimiter = "\t")

df = df[~df['AGE_YEARS'].isin(['Unknown', 'Unspecified'])]

target = pd.DataFrame(df['k__Bacteria;p__Verrucomicrobia'])

X = df['AGE_YEARS']
Y = target['k__Bacteria;p__Verrucomicrobia']

model = sm.OLS(Y.astype(float), X.astype(float)).fit()
predictions = model.predict(X)

model.summary()
# print(df['k__Bacteria;p__Verrucomicrobia'])