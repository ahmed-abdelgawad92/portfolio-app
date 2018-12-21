import { trigger, transition, style, query, group, animate, animateChild } from "@angular/animations";

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('1 => 2', [
            style({ position: 'relative' , height: '!'}),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '100%', height: '!'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({ left: '-100%' }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('2 => 1', [
            style({ position: 'relative' , height: '!'}),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ right: '100%', height: '!'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('100ms ease-out', style({ right: '-100%' }))
                ]),
                query(':enter', [
                    animate('100ms ease-out', style({ right: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);