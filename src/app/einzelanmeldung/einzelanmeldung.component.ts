import { Component, OnInit } from '@angular/core';

export interface IEinzelStarter {
  vorName: string,
  nachName: string,
  geschlecht: string,
  stufe: string,
  schulart: string,
  klasse: string
}



@Component({
  selector: 'app-einzelanmeldung',
  templateUrl: './einzelanmeldung.component.html',
  styleUrls: ['./einzelanmeldung.component.css']
})
export class EinzelanmeldungComponent implements OnInit {
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
  einzelStarter: IEinzelStarter[] = []

  constructor() { }

  
  public addParticipant(){
    this.einzelStarter.push({
      vorName: this.newVorName,
      nachName: this.newNachName,
      geschlecht: this.newGeschlecht,
      stufe: this.newStufe,
      schulart: this.newSchulart,
      klasse: this.newKlasse
    })  
    //alert(JSON.stringify(this.participants))
  }


  ngOnInit() {
  }

}
