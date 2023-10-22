import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Home = () => {

    const [News, setNews] = useState([]);

    const getNews= async()=>{
        await axios({
            method:'GET',
            url:'http://localhost:3004/news/getPosting'
        })
        .then((result=>{
            
            console.log(result.data);
            setNews(result.data)
        }))
        .catch((error)=>{
            console.log(error);
        });
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div>
           <div className='container-fluid'>
                <div className='container'> 
                        <div className="row row-cols-1 row-cols-md-3 g-4 pt-5">
                            {News.map((data)=>{
                                const {id,title,isiBerita,category,penulis,idPenulis,image,status,createdAt} = data;
                                
                                return(
                                <div className="col" key={id}>
                                    <div className="card h-100">
                                    <img src={image} className="card-img-top"  style={{maxHeight:'350px'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">{isiBerita.substr(0,280)}...<span>ReadMore</span></p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">{createdAt}</small>
                                    </div>
                                    </div>
                                </div>
                                )
                            })}
                            
                            
                        </div>
                </div>   
           </div>
        </div>
    );
}

export default Home;
