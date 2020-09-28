import React from 'react'
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  } from "@ionic/react";

const BmiResult: React.FC<{nResult: Number}> = ({nResult}) => {

    if(nResult <= 0) return null

    return (
            <IonCard>
              <IonCardContent>
                <IonCardHeader>
                  <IonCardSubtitle>Your <b>Body Mass Index</b> is equal:</IonCardSubtitle>
                  <IonCardTitle>{nResult}</IonCardTitle>
                </IonCardHeader>
              </IonCardContent>
            </IonCard>
    )
}
export default BmiResult