import React from 'react'
import {
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
  } from "@ionic/react";
import { checkmarkCircleOutline } from 'ionicons/icons'

const BmiButtons: React.FC<{onCalculate: () => void}> = (props) => {
    return (
              <IonRow>
                <IonCol>
                  <IonButton onClick={() => props.onCalculate() }>
                    <IonIcon slot="start" icon={checkmarkCircleOutline} />
                    Calculate
                  </IonButton>
                </IonCol>        
              </IonRow>
      )
}

export default BmiButtons