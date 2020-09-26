import React from "react";
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

const App: React.FC = () => (
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
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Your weigth</IonLabel>
              <IonInput></IonInput>
            </IonItem>            
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton>
              <IonIcon slot="start" icon={checkmarkCircleOutline} />
              Calculate the result
            </IonButton>
          </IonCol>
          <IonCol className="ion-text-right">
            <IonButton>
              <IonIcon slot="start" icon={closeCircleOutline} />
              Reset
            </IonButton>
          </IonCol>          
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonApp>
);

export default App;

