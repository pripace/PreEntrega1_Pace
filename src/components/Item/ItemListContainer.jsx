import Item from './Item';
function ItemListContainer(props){

    return (
        <div>
            <div>
                <h1 className='listTittle'>{props.gretting}</h1>
            </div>
            <h3 className='listTittle'>Mis Productos</h3>
            <div className='cuerpoCards'>
            <Item img="./img/mat.jpg" tittle="Mat" price={5000} 
            descripcion="Mat de Yoga Ultraresistente. Material ecológico TPE." stock={20}/>
            <Item img="./img/cubo.jpg" tittle="Cubo" price={1000} 
            descripcion="Cubo liviano ideal para mejorar posturas." stock={50}/>
            <Item img="./img/zafu.jpg" tittle="Zafu" price={2500} 
            descripcion="Zafu de meditación. Relleno de semillas, tela lavable." stock={12}/>
            <Item img="./img/cinto.jpg" tittle="Cinto" price={900} 
            descripcion="Cinto resistente de 2 metros. Mejora tus asanas." stock={25}/>
            <Item img="./img/esfera.jpg" tittle="Esfera" price={3500} 
            descripcion="Esfera para trabajar distintos planos del cuerpo de forma segura." stock={8}/>
            <Item img="./img/kit.jpg" tittle="Kit Meditación" price={2800} 
            descripcion="Kit de almohadilla para ojos, almohada cervical y almohadilla extra. Rellenas de semillas y lavanda." stock={10}/>
            </div>
        </div>
    );
}

export default ItemListContainer;
