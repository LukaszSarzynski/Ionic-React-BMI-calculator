import React, { useState, useRef } from "react";
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons'

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
import { isNumber } from "util";

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
        <IonGrid>
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
          <IonRow>
            <IonCol>
              <IonButton onClick={() => calculateResult()}>
                <IonIcon slot="start" icon={checkmarkCircleOutline} />
                Calculate
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-right">
              <IonButton onClick={() => clearInput()}>
                <IonIcon slot="start" icon={closeCircleOutline} />
                Reset
              </IonButton>
            </IonCol>          
          </IonRow>
        </IonGrid>
        {(result > 0) && 
        <IonCard>
          <IonCardContent>
            <IonCardHeader>
              <IonCardSubtitle>Your <b>Body Mass Index</b> is equal:</IonCardSubtitle>
              <IonCardTitle>{result}</IonCardTitle>
            </IonCardHeader>
          </IonCardContent>
        </IonCard>
        }
      </IonContent>
    </IonApp>
  )

}

export default App;

