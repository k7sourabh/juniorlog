import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-age-debtors',
  templateUrl: './age-debtors.component.html',
  styleUrls: ['./age-debtors.component.scss']
})
export class AgeDebtorsComponent implements OnInit {
  isShow = true;
  page:number = 1;
  size:number = 10;
  records:any[] = [];
  pagination:any={};
  pages:any=[]

  toggleDisplay() {
    this.isShow = !this.isShow;
  }


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getTotal(key){
    let sum =0
    this.records.forEach((item)=> sum = sum + parseInt(item[key]))
    return sum;
  }

  getData(){
    console.log(this.page)
    this.http.get('api/apps/age-debtors',{params:{page:this.page-1,size:this.size}})
    .subscribe((res:{ageRows,pagination})=>{
      console.log(res.ageRows,res.pagination);
      this.records = res.ageRows; 
      this.pagination = res.pagination; 
      this.pages = Array.from({length: res.pagination.lastPage}, (_, i) => i + 1);
    })
  }

  previousPage(){
    if(this.page > 1){
      this.page = this.page-1;
    }else{
      this.page =1;
    }
    this.getData();
  }

  nextPage(){
    if(this.page< this.pagination.lastPage){
      this.page = this.page+1
    }else{
      this.page = this.pagination.lastPage
    }
    this.getData()
  }

  getPageData(page){
    this.page = page;
    this.getData();
  }
}
