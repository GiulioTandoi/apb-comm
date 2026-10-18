import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TPipe } from '../../core/t.pipe';
import { Edizione } from '../../shared/edizione';
import { OspitalitaCards } from '../../shared/ospitalita-cards';
import { ProfiloSensoriale } from '../../shared/profilo-sensoriale';
import { SchedaTecnica } from '../../shared/scheda-tecnica';
import { TrePilieri } from '../../shared/tre-pilieri';
import { Varco } from '../../shared/varco';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TPipe, Edizione, OspitalitaCards, ProfiloSensoriale, SchedaTecnica, TrePilieri, Varco],
  templateUrl: './home.html',
})
export class HomePage {}
