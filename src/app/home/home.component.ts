import { Component, OnInit, OnDestroy } from '@angular/core';
import { Property } from '../models/Property.model';
import { Subscription } from 'rxjs';
import { PropertiesService } from '../services/properties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
}) 
export class HomeComponent implements OnInit, OnDestroy {

  properties : Property[];
  propertySubscription: Subscription;

  constructor(private propertiesService : PropertiesService, private router : Router) { }

  ngOnInit() {
    this.propertySubscription = this.propertiesService.propertiesSubject.subscribe(
      (properties : Property[]) => {
        this.properties = properties;
      }
    );
    this.propertiesService.getProperties();
    this.propertiesService.emitProperties()
  }

  ngOnDestroy () {
    this.propertySubscription.unsubscribe();
  }

  onViewProperty (id:number){
 this.router.navigate(['/property',id])
  }

}
