import { Component } from '@angular/core';




export interface IStaffel {
  vorNameSchwimmer: string,
  nachNameSchwimmer: string,
  vorNameRadfahrer: string,
  nachNameRadfahrer: string,
  vorNameLaeufer: string,
  nachNameLaeufer: string,
  geschlechtStaffel: string,
  klassenStufeStaffel: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'DBS Triathlon 2019';
  newVorName = ""
  newNachName = ""
  newGeschlecht = ""
  newStufe = ""
  newSchulart = ""
  newKlasse = ""
  newVornameSchwimmer =""
  newNachnameSchwimmer =""
  newVornameRadfahrer =""
  newNachnameRadfahrer =""
  newVornameLaeufer =""
  newNachnameLaeufer=""
  newGeschlechtStaffel =""
  newKlassenStufeStaffel=""

  displayMode = ""

  staffeln: IStaffel[] = []

  public constructor(){

  }



  public addStaffel(){
    this.staffeln.push({
      vorNameSchwimmer: this.newVornameSchwimmer,
      nachNameSchwimmer: this.newNachnameSchwimmer,
      vorNameRadfahrer: this.newVornameRadfahrer,
      nachNameRadfahrer: this.newNachnameRadfahrer,
      vorNameLaeufer: this.newVornameLaeufer,
      nachNameLaeufer: this.newNachnameLaeufer,
      geschlechtStaffel: this.newGeschlechtStaffel,
      klassenStufeStaffel: this.newKlassenStufeStaffel
    })
    
  }
}
