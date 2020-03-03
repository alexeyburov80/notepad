import {Component, Inject, OnInit, ViewChild, OnDestroy, HostListener} from '@angular/core';
import {TasksService} from './tasks.service';
import {Subscription} from 'rxjs';
import {NavService} from '../../services/nav.service';


@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css'],
    providers: [TasksService]
})

export class TasksComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    public view = 'tasks';

    constructor(
        public tasksService: TasksService,
        private navService: NavService) {
    }

    ngOnInit() {
        this.subscription = this.navService.getMessage().subscribe(message => {
            this.setView(message);
        });
    }

    setView(view: string) {
        this.view = view;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    /// todo proc
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (window.matchMedia('(max-width: 768px)').matches) {
            this.tasksService.aliases.map((t) => {
                if (t.eng === 'dedline' ||
                    t.eng === 'id' ||
                    t.eng === 'description' ||
                    t.eng === 'tags'
                ) {
                    t.visible = false;
                    return t;
                }
            });
        }

        if (window.matchMedia('(min-width: 769px)').matches) {
            this.tasksService.aliases.map((t) => {
                if (t.eng === 'dedline' ||
                    t.eng === 'id' ||
                    t.eng === 'description' ||
                    t.eng === 'tags'
                ) {
                    t.visible = true;
                    return t;
                }
            });
        }

    }
}

// if (event.target.innerWidth < 780) {
//     if (t.eng === 'description' ||
//         t.eng === 'tags'
//     ) {
//         t.visible = false;
//         return t;
//     }
//
//     if (event.target.innerWidth < 460) {
//         if (t.eng === 'id' ||
//             t.eng === 'estimation'
//         ) {
//             t.visible = false;
//             return t;
//         }
//
//         if (event.target.innerWidth < 280) {
//             if (t.eng === 'dedline') {
//                 t.visible = false;
//                 return t;
//             }
//         } else {
//           if (t.eng === 'dedline') {
//             t.visible = true;
//             return t;
//           }
//         }
//     } else {
//       if (t.eng === 'id' ||
//           t.eng === 'estimation'
//       ) {
//         t.visible = true;
//         return t;
//       }
//     }
// } else {
//   if (t.eng === 'description' ||
//       t.eng === 'tags'
//   ) {
//     t.visible = true;
//     return t;
//   }
// }
// });

