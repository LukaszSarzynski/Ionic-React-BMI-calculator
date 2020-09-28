import React from 'react'
import {
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonInput,  
  } from "@ionic/react";

const BmiInput: React.FC<{sLabel: string; onValueChange: (v:any) => any}> = ({sLabel, onValueChange}) => {

    return (
        <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">{sLabel}</IonLabel>
            <IonInput clearInput type="number" min="0" step="0.01" onIonChange={(v) => onValueChange(v.detail.value)} />
          </IonItem>         
        </IonCol>
      </IonRow>
    )
}
export default BmiInput