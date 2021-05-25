import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import PageHeader from "../../components/PageHeader";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANDRAQEBANEBANDQ0bDQ0VDRAIEA4WIB0iIiAdHx8kKDQsJCYxJx8fLTstMT1AMDAwIys1OD9ANzQ5OkABCgoKDg0OFg4PFSsZFSUrKzcrLDc3Ky0yKys3NysrMjErLTgtKzU4LTUtKysrLSstKysrKysrLSsrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBQYHBAj/xABAEAABBAADAwkGBQEGBwAAAAABAAIDEQQSIQUxUQYHEyJBYXGBkSMyocHR8EJicrHhFCVSU4Ky8RUkg5Kis9L/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAgEQEBAAIDAQEAAwEAAAAAAAAAAQIRAyExEkEEE3Ey/9oADAMBAAIRAxEAPwDoQVgVbU4+isLGlOFW1OEDhOCkCZpQWApgVWE4UBwmSApgVIdEFKEQoDhEFKCiEDKIIoCogogKloKIIooULQQlKiUpKCFBRRSMIPonaq07T96oLAmBSNKcFBYEwSBM1BYCmCQJggcJgkBTBA4KKS0wQOEQktNagNagSgo2ga1ELUtAVLQtRBLQUQtBCgVELUiKIFRQMIE7VWE7VIsBThVtTj77EFgTAqsJwUFgKYKsJwUDgpgkBTAoHtEFc95Xc5MeEe6HChs0rSQ+UkmJh4DiVoeK5xse8n27m7tGtbGPgFT6i3zXf0VwXZfOfjoXAueJmfijkaD6EarqnJLlphtqDK245wLdA4gk97T2hTMpS42NnRCVS1KprUtC1EBtRBRAbQJQUQQlC1ECpAtRAlRBhQnCranBUiwFO1VpwVAsB+9yYKsJwUDhOFWCmCCwLSOdHlIcHhhBEamxINuBosj7T57vVbqFwPlttX+s2liH3bGSFkfaMrdNPHU+arlelsZutSxDyXKkAkr3GAuJIV2Fwlm9Fntrp4ooj6rLbMlfA9kjHOY9jgWuBLSFRiJBHY03lUsxJ3d+iip6fRHIvlCNo4XM6hNFQmaNL4O8D9VsNrhfNttk4bHx2ajmpkg7Ndx8jS7mtMLuMs5qmUS2jasoKloWgpBtAqEoIIgSoSgSghKiBUQYUfv5J2qsFOEFjSnaqgU4QWBOCqwUwQWBMqwU4KCjauK6DDTy/wCFBK70BK+YHYgk3dlzib3r6F5w8T0Wx8Y7jDl/7iG/NcM2ZsR039M4+7I45xuoX81nnZPWvHjb4zuxtkyPgD+jLg5t1YZ+6H/CJXPyBjoyd2anj1C2nFbPkkjDY5DGAD7oHkq8FgpI6D3l9dtBq5Pu+uycW9Sud7a2TiIHHpGGr0cOuFiw1zdaNLrG04TK+hrQFjVYKXZU2UteGODrBpuWhXYtMeXrtnnw6vTXNlzEEEEgiiDu1X0nsbF/1GFgl/xYI3HxI1XzFgnFuh3tzD4r6F5vZs+yMKeDHD0cR8lth658/GyWpaW0bWjIbUtC0LUg2gSpaBQElBAoIColJRQYUJwVWPvtTgqQ4VgKqaU9qA4KcJAUwKCwFFICmCDReefFhmyhH2zYiMV3Cyfktd2CGnBw5cvVjioij4/G0Oe7HB00EN6RROcfF38ALReT+1ZMO1nXIjGKiD26EU4G/wBh6LHkx+vHRw5/Hv667FIA3U0qMTO0OaCQ26qyG2qZWuyBzAHFoPVJIBVkMOImjDuhZIxwNFjhL89FySPQlVPkaJwLHWHir8UBkJ7ACsXiopcMHSOwrm6gXYY6+614uUmOdh8C5zjldICGNuyCf91Pz2rllJLWkEguc4bnPkI8MxXfebM/2Nhf+t/rcuAQsqNg/ICu+c2Lv7Hw3cZ/9bl2Y+vOzvTa7UtC1FoyG1ELUtAbQtAqWgloFBRBFECogwrSnCraU4UiwJx99qrB+9yZpQWApgUgTAqBYEwVYK8HKPaYwWCnnJAMcbsg4u3NHrSDh/OFi/6zas4abuUMZ5dVYPdhxkDadM7e0PzZWj/6XnGL/wCZD3E0XnM7eRehK9ogezDMbRzdNiMu4iqj1vh3qi9dK5J4zpcNETpmjbWpdu0WQfhJYXF8Di3Mby5nNAPdS0/Zm2jA1rA1ro2NaGVbCNN4Pja2DD8sIcvtQ5hG85TKD6LmuGUtsdnHzY61Vz8PM9/STvLsuoGYuaFzvlrtQ4icNB6kdhvetn25ysbMDFC2WiOtKWFnpa1DGwNLmneGtN6EWrYY3e6pzcsymocNprO9gXdObIVsfD/qxH/scuHurKOym6egXbebB97Jh39V84/8yfmtsfXPl42xFLan8LRmNqIWpaA2haFqIJaBUJQKCKJSogxA+iI0SAfeqdv0UiwFM1Vgp2qA4ThVpgUFgK4xztcrm4mUYOBwdFA4mV4Nh8n0Gvmtr5c8qGta7DROcS4OErmmneAP7rl78LENRE0d5cZFW38TOmt9GT2HwolZeKGV7WQPtsced2WyLJr6BbvsCAOhxQIG8GqA3t/hYCZhJJvXerZY/Ksy2djRlAHYKSStv1KaGQHuPVvvTvFiu4qizzPtxF9jn6+f8qnEN6pC9r26g8SfiP4VGIboVKGOZNmv8pIW88j+XMmAw/QdFG9ucua5zzGRe8LnGGk67v1FZDDn2n+VV8rS/wDLr+G5ywXDpIGBvaWzAkeoW5bJ21BjG5oZGuPa2wHjyXzy3tXqwOOkw0rZIi5pbWYt6pU7sUfRdqLVeRnKsY5vRy0J2g6+6JRxHetpJVpdoG0LQtQlSJaBUtAoIVECVFAwwThVgpwfkrCwJwfveqwnAUBwVjuUePOGwksgPWykMPAle8H5LUucXFVFDF/fe4ns3CvmlHPHvDzqd96714qpzmntqla/R1cSaTOb1gfykdqoNk5Ni4pxoc2FadO5tLXWOp54Uth5OOPQPPDDYkXu7SVgDHq49/ituX8rPD9LJHRDhwRHWF8LVjdWj/KkiFOI7isWhTeUHgWj4kKqcaHwVrz1XDgH146FLPuUjWCMpJ/OshAaeDxAXjxDfiSV6oxo3jlKq1/NPcTV+SZhrxKrmdQHfV+qAcaJomq3WRw1UsmT2fjnwvDo3Fr2EFjxpS7dyY2hJisHFLK0B7wbI0zUavutcCiNak613rs3N3j5ZsGGvYAyGhFIAWZhw8uKT1LbLQQtBXQJKFqIWglqIFRBhwnH0VY++1MCpQtB09EzVWEwRKwFaHzkv9tAOEch+P8AC3sLROcaFzpYHNa5wDCDTS+tVXLw/wAaRi4s1EGj/Cpw8uZpB95pAcvXLhnke68Vq12UgK3B7PMmFxE4vPCWZowLurzfA/BU+otMLWR5Nn2bm62XOHH3wQsbl1cO8o7BxrRJlLqbK0gOvKAbtp9dPNSaUPe8jTM4mqqtdy2y7wlY49ZVURQ8AO9A+8O+0b6tdzgq3P8AdPeFk0KfeI72/GwkcfZjiKvt3JpXUT+l3qNVS8+8BxPx1UjF4uHraJ4Br4Ar0TEXx0CpNN+NonYWXvDQCdRpxPYFt8WziIBhm5QXlrsXNlvKBuH3wWH5IYYOe6Yi8j6Z41vW5vALTejBZe7dnK5+bk1dR08HF1usNtLDxx4LqlscTXR65S9+JddanhvK3vmy2hHLgOiaRmge627jRN36kjyXM+U0sjjFma3o3AmOH8QA0DiOy+xezm7xfQ7TiLXZWy5myxl2XeDXxpace9brPms+unbygUELWzEbQKFqWgloKEqKRh2/TsTqsaJgUQtCYFVt+96cFErAVrXKASSzNMMjGNY0h5LRKHG1sa03bT4m4lwfDLI81ULR0jWjjrosea3XTbh1vt62Mea68Ljppkv5pJcKdXdGzMAcxa8xlw9F5oZ2ucAcFOASPaHoXNb36OtZF7BWmZp8TuXBl078dVpuN2YGTxSwPkjizHpYATEC7y714drYQGQvic0lxdmGaweI8fjotwxeGzA6a/iWk7elMDhYOVzrzAX1t2viP2Xf/D55b/Xn44f5X8fU/sxeVkm+94Oo3pHu08AszsfDx4qJ8R6rhrE86Fp7fELB4uN0L3RvFFpOm++8Lfk4/muXHLaSSdYeKpbLu/S2/Eb1RNLoO6lTJNR83fVZ6XXSP6vha8s0qrlmv7tLhgXSMFGs7bOtb0p63zYGGMGHY0+9qXfqOvwXsxuMbEwOkcOjHuM3mQ8V4I9pxhtEmwN9EgrXNuSvmksaxgANbmLSAuSYXLLdduXJMMens25O6Y9LdkVXb1eC8ODnzuFiyCKNljh5ptnyh7SwnQtIHarNhw5do4ZjhbX4iAEb7GYaLpk1047bbuvoPAF3QRZ/f6KPPxutV6LQQWiBQJQtRBFEtqIMQCntVgpgpFjSnB+96rH1ToHH32rTeWu0JcPO3o8gD4xqWlxuyFuIWnc4EWsLtLyyD9vqq5SWEtnca47lXiYXCyyS3HqFgZp4hbpsjaMONYTG4EtrM33XNXNJIgTmN/RNhZn4eQSRnK4biNMw71jnxY2dNePnyl7dPmw57FhMfs4PsOja4G9KCTZfLCOQBs46N2nX1LD9PNZg4uJ3uuY7uDg5ceXHljXdhyY5RqTNgNjdbOmZwHSZwPVeXlDgWZGueZHPumW4efkt0keD+ELUOV7/AGkY3AMNeNrXjzzuUlrPmw45hbJ21mXCMO9u/vLVScHHd5fiSvQ95+wFWSupwF6Jo3Nbp+UKZxuSPs/ZKAH3ogYyJS/uKBI4/FDMOKDy5jFIHDcSMy2LZsOfF4N41vEwV5uCwklOFalbNyCw5nxWHaAaixDXG+A1+SkdvtBBS/vRXEUJQtC0EtRAqKRifNMEVEBaez6pwUFEQs7Fq3L9vsI3f3ZHX5j+FFFF8K0MtO/Tu7FU7vHh2qKKqCuAq9DW7vXn6IXZ0PHcVFETKuZtDEQ+5NKAPw2JB6FLidqS4ggS5CWtOVwBYT4qKKupvelvq61t5H33Ksg8VFFKClvefWkCwd/mS5RRAMg4Kad3wCCiIGxx/ZdE5poD00z6OURAZtd5P+6iimJdMtRRRWAKloKIIooog//Z"
              alt="Alita"
            />
            <div>
              <strong>Alita</strong>
              <span>História</span>
            </div>
          </header>

          <p>
            Lorem Ipsum has been the industry's standard dummy text
            <br />
            <br />
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 100,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
