import React, { useState } from "react";
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
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
  const [isError, setIsError] = useState(false)


  const calculateResult = () => {
    const nWeight = Number(weight)
    const nHeight = Number(height)

    if(nWeight && nHeight) {
      setResult(nHeight /Math.pow(nWeight, 2))
    } else {
      setIsError(true)
    }
  }

  return (
    <IonApp>
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

