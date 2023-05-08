import React from "react";
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main class="holder" style={{marginTop: 15 + 'px'}}>
        <div class="columnas">
            <div class="historia">
                <h2>El Estudio</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio suscipit modi, perspiciatis
                    natus optio corrupti earum possimus repellendus nisi praesentium accusantium dolorem nostrum eum,
                    repudiandae odio ab quia in excepturi!
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus et recusandae nesciunt!
                    Vitae veniam reiciendis eius accusantium eos eveniet possimus, nobis asperiores iure molestiae
                    impedit, illum odio autem. Harum.
                </p>
            </div>
            <div class="socios">
                <h2>Socios</h2>
                <div class="personas">
                    <div class="socio">
                        <img src="img/nosotros/nosotros2.jpg" alt="Ana González" />
                        <h5>Ana González</h5>
                        <h6>Fundador</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut dicta nemo rerum nam,
                            repudiandae repellat hic optio dolores consectetur. Voluptas omnis odit id accusantium
                            laboriosam incidunt reiciendis dolorem non?
                        </p>
                    </div>
                    <div class="socio">
                        <img src="img/nosotros/nosotros5.jpg" alt="Juan Gomez" />
                        <h5>Juan Gómez</h5>
                        <h6>Co-fundador</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut dicta nemo rerum nam,
                            repudiandae repellat hic optio dolores consectetur. Voluptas omnis odit id accusantium
                            laboriosam incidunt reiciendis dolorem non?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}

export default NosotrosPage;