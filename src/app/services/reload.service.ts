import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReloadService{
    private status = new BehaviorSubject(false)
    currentStatus = this.status.asObservable()
    constructor(){}
    updateStatus(status: boolean){
        this.status.next(status)
    }
}