import React, { useState, useRef } from "react";
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,  
} from "@ionic/react";
import BmiButtons from './components/BmiButtons'
import BmiResult from './components/BmiResult'

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

  const refWeight = useRef<HTMLIonInputElement>(null);
  const refHeight = useRef<HTMLIonInputElement>(null);

  const calculateResult = () => {
    const nWeight = Number(refWeight.current!.value)
    const nHeight = Number(refHeight.current!.value)

    if(nWeight && nHeight) {
      setResult(nHeight /Math.pow(nWeight, 2))
    } else {
      clearInput()
    }
  }

  const clearInput = () => {
    refWeight.current!.value = ''
    refHeight.current!.value = ''
    setResult(0)
  }

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculate</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your heitht</IonLabel>
                <IonInput ref={refWeight} />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Your weigth</IonLabel>
                <IonInput ref={refHeight} />
              </IonItem>            
            </IonCol>
          </IonRow>
          <BmiButtons onCalculate={() => calculateResult()} onClear={() => clearInput()} />
          <BmiResult nResult={result} />
      </IonContent>
    </IonApp>
  )

}

export default App;

