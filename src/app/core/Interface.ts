import { Injectable } from '@angular/core';

@Injectable()

export class Campaign{
    Name:String;
    Sector:String;
    StartDate:any;
    EndDate:any;
    Medium:Array<{s_no:any,platform:any,minFollowers:any,maxFollowers:any,engagement:any,minimumBudget:any}>;
    Budget:any;
}
