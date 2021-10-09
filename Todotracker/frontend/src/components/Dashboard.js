import React from "react";
import Style from './Dashboard.module.css'

const Dashboard = () =>{
    
    return (<div className={Style.dashboard}>
       <div className={Style.header}>
           <section>12-8</section>
           <section>8-10</section>
           <section>10-12</section>
           <section>12-2</section>
           <section>2-4</section>
           <section>4-6</section>
           <section>6-8</section>
           <section>8-10</section>
           <section>10-12</section>
       </div>
    </div>);
}

export default Dashboard;