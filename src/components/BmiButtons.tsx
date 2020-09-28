import React from 'react'
import {
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
  } from "@ionic/react";
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons'

const BmiButtons: React.FC<{onCalculate: () => void; onClear: () => void }> = (props) => {
    return (
              <IonRow>
                <IonCol>
                  <IonButton onClick={() => props.onCalculate() }>
                    <IonIcon slot="start" icon={checkmarkCircleOutline} />
                    Calculate
                  </IonButton>
                </IonCol>
                <IonCol className="ion-text-right">
                  <IonButton onClick={() => props.onClear() }>
                    <IonIcon slot="start" icon={closeCircleOutline} />
                    Reset
                  </IonButton>
                </IonCol>          
              </IonRow>
      )
}

export default BmiButtons