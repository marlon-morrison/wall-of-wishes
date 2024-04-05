import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { WishComponent } from '../wish.component';


@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {
  @Input() wish! : WishComponent;
  @Input() listFilter: any;
  @Output() listFilterChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }

  i = 0;

  wishlist = [
    { 
      wishName: "Blank", wishValue:0 ,location: "", effect: ''
    },
    { 
      wishName: "Wish #1: To feed an addiction", 
      wishValue:1 ,
      location: " Shattered throne, after ogre fight.", 
      effect: ' Grants an etherial key, used in raid treasure room. '
    },
    { 
      wishName: "Wish #2: Material validation", 
      wishValue:2 ,
      location: " Raid, on ceiling before Riven.",
      effect: ' Spawns chest between 3rd & 4th encounters.'
    },
    { 
      wishName: "Wish #3: Others to celebrate your success", 
      wishValue:3 ,
      location: " New Dreaming City cutscene (titan shield).", 
      effect: ' Awards “Numbers of Power” emblem.'
    },
    { 
      wishName: "Wish #4: To look athletic and elegant", 
      wishValue:4 ,
      location: " Raid, after the large bridge before 2nd encounter. ", 
      effect: ' Warp to 2nd encounter (Shuro Chi). '
    },
    { 
      wishName: "Wish #5: For a promising future ", 
      wishValue:5 ,
      location: " Raid, ascendant realm after Shuro Chi.", 
      effect: ' Warp to 3rd encounter (Morgeth). '
    },
    { 
      wishName: "Wish #6: To move the hands of time", 
      wishValue:6 ,
      location: " Raid, before elevator to the vault.", 
      effect: ' Warp to 4th encounter (Vault).'
    },
    { 
      wishName: "Wish #7: To help a friend in need", 
      wishValue:7 ,
      location: " Inside Riven's jumping puzzle.", 
      effect: ' Warp to final encounter (Riven). '
    },
    { 
      wishName: "Wish #8: To stay here forever ", 
      wishValue:8 ,
      location: " Ledge near Shuro Chi.", 
      effect: ' Plays song “Hope for the Future.” '
    },
    { 
      wishName: "Wish #9: To stay here forever", 
      wishValue:9 ,
      location: " Building between 2nd and 3rd raid encounters.", 
      effect: ' Adds Failsafe voicelines to moments in the raid.'
    },
    { 
      wishName: "Wish #10: To stay here forever ", 
      wishValue:10 ,
      location: " Cathedral of Scars, 3rd round on cliff in the distance.", 
      effect: ' Adds Drifter voicelines to moments in the raid. '
    },
    { 
      wishName: "Wish #11: To stay here forever", 
      wishValue:11 ,
      location: " Nessus, Sunken Cavern near Vex portal. ", 
      effect: ' Grunt birthday party effect within the raid.'
    },
    { 
      wishName: "Wish #12: To open your mind to new ideas", 
      wishValue:12 ,
      location: " Titan, Siren’s Watch on the back of a door.", 
      effect: ' Adds unique effects to the heads of fireteam members.'
    },
    { 
      wishName: "Wish #13: For the means to faed an addiction ", 
      wishValue:13 ,
      location: " Raid, treasure room after opening all chests.", 
      effect: ' Unlocks “Petra’s Run” version of raid (flawless mode).'
    },
    { 
      wishName: "Wish #14: For love and support", 
      wishValue:14 ,
      location: " Mara Sov’s Throne World.", 
      effect: ' Spawns Ahamkara eggs throughout the raid.'
    },
  ]

  @ViewChild('wishes') wishesL !: ElementRef; 
  updateFilter() {
    this.listFilter = this.wishesL.nativeElement.value
    this.i = this.listFilter;
    this.listFilterChange.emit(this.listFilter);  

   }
}



