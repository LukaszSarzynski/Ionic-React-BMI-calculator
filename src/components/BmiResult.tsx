import React from 'react'
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  } from "@ionic/react";

const BmiResult: React.FC<{nResult: number}> = ({nResult}) => {

    if(nResult <= 0) return null

    return (
            <IonCard>
              <IonCardContent>
                <IonCardHeader>
                  <IonCardSubtitle>Your <b>Body Mass Index</b> is equal:</IonCardSubtitle>
                  <IonCardTitle className="ion-text-center">{nResult.toFixed(2)}</IonCardTitle>
                </IonCardHeader>
              </IonCardContent>
            </IonCard>
    )
}
export default BmiResult