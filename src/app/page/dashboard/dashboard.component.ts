import {
  Component,
  Input,
  OnInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { AdminDetailComponent } from '../admin/admin-detail/admin-detail.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // heroName: string | null = null;
  // isShow: boolean = true;
  title = 'this is title';
  // buttonContent = 'Button Of Dashboard';
  thenBlock: TemplateRef<any> | null = null;
  show = true;

  @ViewChild('primaryBlock', { static: true })
  primaryBlock: TemplateRef<any> | null = null;
  @ViewChild('secondaryBlock', { static: true })
  secondaryBlock: TemplateRef<any> | null = null;

  switchPrimary() {
    this.thenBlock =
      this.thenBlock === this.primaryBlock
        ? this.secondaryBlock
        : this.primaryBlock;
  }
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.thenBlock = this.primaryBlock;
    // this.title = "okkok"
    // this.getHero();
  }
  dashboardClickBtn(value: any) {}
  changEmail() {
    this.appService.setUsername('Lucvx');
  }
}
