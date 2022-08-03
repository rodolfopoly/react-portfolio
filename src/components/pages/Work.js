import React from 'react';
import buzoneoImg from '../../assets/images/Buzoneo-Tarragona-Reparto-y-Distribucion-de-Publicidad-1280x640.jpg';
import idiBuild from '../../assets/images/IDibuild-Soluc-1280x640.jpg';
import mercho from '../../assets/images/Mercho-1280x640.jpg';
import magelaHerrera from '../../assets/images/magela-jdjd-1280x640.png';
import boredAndHungry from '../../assets/images/Screen Shot 2022-04-29 at 6.27.55 PM.png';




function Work() {
    return (
        <section class="row">
                <aside class="aside">
                    <h3 id="Work">Work</h3>
                </aside>
                <section class="section">
                    <div class="card">
                        <a target="blank" href="https://www.buzoneotarragona.com/"><img src={buzoneoImg} alt="Buzoneo Logo"/></a>
                        <figcaption>Express Web Design</figcaption>
                    </div>
                    <div class="card">
                        <a target="blank" href="https://idibuild.com/"><img src={idiBuild} alt="idibuild logo"/></a>
                        <figcaption>Premium Web Design</figcaption>
                    </div>
                    <div class="card">
                        <a target="blank" href="https://mercho.org/"><img src={mercho} alt="Mercho logo"/></a>
                        <figcaption>Ecommerce Web Design</figcaption>
                    </div>
                    <div class="card">
                        <a target="blank" href="https://lissygonz.github.io/bored-and-hungry/"><img src={boredAndHungry} alt="BoredAndHungry Logo"/></a>
                        <figcaption>Express Web Design</figcaption>
                    </div>
                    <div class="card">
                        <a target="blank" href="https://magelaherrera.com/"><img src={magelaHerrera} alt="Magela Herrera logo"/></a>
                        <figcaption>Express Web Design</figcaption>
                    </div>
                </section>
            </section>
    );
}
export default Work;