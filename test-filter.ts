import { BehaviorSubject, filter } from "rxjs";


//common service
const subject = new BehaviorSubject<any>({});

//addValue() 



//component 1
const observableOne$ = subject.asObservable().pipe(filter(e=>e.type==='one'));
observableOne$.subscribe(v=> console.log(v));


//component 2
const observableTwo$ = subject.asObservable().pipe(filter(e=>e.type==='two'));
observableTwo$.subscribe(v=> console.log(v));


//sending from components calling common . addValue() 
subject.next({type:'two',value:'hello'});

subject.next({type:'one',value:'hello'});

