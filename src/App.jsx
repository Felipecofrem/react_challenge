import Header from './assets/components/Header';
import Cards from './assets/components/Card';
import Footer from './assets/components/Footer';

function App() {
return (

  <div className='container'>
    <Header title="Galería de Imágenes en React" />
    <a type="button" class="btn btn-primary" href='https://www.forbes.com.mx/forbes-life/conoce-los-balones-utilizados-en-cada-mundial-de-futbol-desde-1970/' target="new">
  Más inf.
</a>

    <div className="d-flex flex-wrap">
      <Cards srcImage="././1994_questra.jpg"
      titleImage="Balón Questra"
      description="Balón Adidas Questra, usado en el Mundial de USA 1994"/>
      <Cards srcImage="././1998_tricolore.jpg"
      titleImage="Balón Tricolore"
      description="Balón Adidas Tricolore, usado en el Mundial de Francia 1998"/>
      <Cards srcImage="././2002_fevernova.jpg"
      titleImage="Balón Fevernova"
      description="Balón Adidas Fevernova, usado en el Mundial de Corea y Japón 2002"/>
      <Cards srcImage="././2006_teamgeist.jpg"
      titleImage="Balón Teamgeist"
      description="Balón Adidas Teamgeist, usado en el Mundial de Alemania 2006"/>
      <Cards srcImage="././2010_jabulani.jpg"
      titleImage="Balón Jabulani"
      description="Balón Adidas Jabulani, usado en el Mundial de Sudáfrica 2010"/>    
      <Cards srcImage="././2014_brazuca.jpg"
      titleImage="Balón Brazuca"
      description="Balón Adidas Brazuca, usado en el Mundial de Brasil 2014"/>
    </div>
    
    <Footer title="Visual Studio Code / React / Vite"
    webDescription="Balones oficiales usados en mundiales de fútbol"/>
  </div>
);
}

export default App;