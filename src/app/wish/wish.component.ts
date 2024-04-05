import { Component, OnInit } from '@angular/core';
import { WatermarkImg, WishSymbol} from '../../shared/models/wishSymbol';
import { WishService } from './wish.service';
@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit{
  items : WishSymbol[] = [];
  watermark : WatermarkImg[] = [];
  constructor(private wishService: WishService) {

  }
  
  wishValue = 0;
  
  ngOnInit(): void {
    this.wall()
    this.wishService.getWatermark().subscribe((data: any) => {
      this.watermark = data;
      console.log(this.watermark);
      },
      (error : any) => {
        alert(error.message)
      }
    )
  }

  
  wall() {
    console.log(this.wishValue);
    if (this.wishValue == 0) {
      this.wishService.getWishes().subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
        },
        (error : any) => {
          alert(error.message)
        }
      )
    } else if (this.wishValue == 1) {
      console.log(this.wishValue);
      
      this.wishService.getWish1().subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
        },
        (error : any) => {
          alert(error.message)
        }
      )
    }else if (this.wishValue == 2) {
      console.log(this.wishValue);
      
      this.wishService.getWish2().subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
        },
        (error : any) => {
          alert(error.message)
        }
      )
    }else if (this.wishValue == 3) {
      console.log(this.wishValue);
      
      this.wishService.getWish3().subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
        },
        (error : any) => {
          alert(error.message)
        }
      )
    }else if (this.wishValue == 4) {
      console.log(this.wishValue);
      
      this.wishService.getWish4().subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
        },
        (error : any) => {
          alert(error.message)
        }
      )
    }else if (this.wishValue == 5) {
      console.log(this.wishValue);
      
      this.wishService.getWish5().subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
        },
        (error : any) => {
          alert(error.message)
        }
      )
    }else if (this.wishValue == 6) {
      console.log(this.wishValue);
      
      this.wishService.getWish6().subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
        },
        (error : any) => {
          alert(error.message)
        }
      )
    }else if (this.wishValue == 7) {
      console.log(this.wishValue);
      
      this.wishService.getWish7().subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
        },
        (error : any) => {
          alert(error.message)
        }
      )
    }else if (this.wishValue == 8) {
      console.log(this.wishValue);
      
      this.wishService.getWish8().subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
        },
        (error : any) => {
          alert(error.message)
        }
      )
    }else if (this.wishValue == 9) {
      console.log(this.wishValue);
      
      this.wishService.getWish9().subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
        },
        (error : any) => {
          alert(error.message)
        }
      )
    }else if (this.wishValue == 10) {
      console.log(this.wishValue);
      
      this.wishService.getWish10().subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
        },
        (error : any) => {
          alert(error.message)
        }
      )
    }else if (this.wishValue == 11) {
      console.log(this.wishValue);
      
      this.wishService.getWish11().subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
        },
        (error : any) => {
          alert(error.message)
        }
      )
    }else if (this.wishValue == 12) {
      console.log(this.wishValue);
      
      this.wishService.getWish12().subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
        },
        (error : any) => {
          alert(error.message)
        }
      )
    }else if (this.wishValue == 13) {
      console.log(this.wishValue);
      
      this.wishService.getWish13().subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
        },
        (error : any) => {
          alert(error.message)
        }
      )
    }else if (this.wishValue == 14) {
      console.log(this.wishValue);
      
      this.wishService.getWish14().subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
        },
        (error : any) => {
          alert(error.message)
        }
      )
    }
    
  }

  filter: any;
}
