import React, { useState } from "react";
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonAlert, 
  IonButton, 
} from "@ionic/react";
import BmiButtons from './components/BmiButtons'
import BmiResult from './components/BmiResult'
import BmiInput from './components/BmiInput'

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {

  const [result, setResult] = useState(0)
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [errorMessage, setErrorMessage] = useState('')


  const calculateResult = () => {
    const nWeight = Number(weight)
    const nHeight = Number(height)
    const sWeightError = 'Weight is wrong'
    const sHeightError = 'Height is wrong'

    if(nWeight > 0 && nHeight > 0) {
      setResult(nHeight /Math.pow(nWeight, 2))
    } else if (!(nWeight > 0) && nHeight > 0) {
      setErrorMessage(sHeightError)
    } else if ( nWeight > 0 && !(nHeight > 0) ) {
      setErrorMessage(sWeightError)
    } else {
      setErrorMessage(sWeightError + " and <br>" +sHeightError.toLowerCase())
    }
  }

  return (
    <IonApp>
      <IonAlert
          isOpen={(errorMessage.length > 0)}
          header={'Wrong data'}
          subHeader={'Please enter correct data.'}
          message={errorMessage}
          buttons={['OK']}
          onDidDismiss={() => setErrorMessage('')}
        />      
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>BMI Calculate</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <BmiInput onValueChange={(v) => setWeight(v)} sLabel="Your heitht" />
          <BmiInput onValueChange={(v) => setHeight(v)} sLabel="Your weigth" />
          <BmiButtons onCalculate={() => calculateResult()} />
          <BmiResult nResult={result} />
      </IonContent>
    </IonApp>
  )

}

export default App;

