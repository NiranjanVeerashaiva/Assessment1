import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

function Data2() {
  const [items, setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(2);
  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=100&page=1`
      );
      const data = await res.json();
      setItems(data);
    };

    getComments();
  }, []);

  const fetchComments = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=100&_page=${page}`
    );
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();

    setItems([...items, ...commentsFormServer]);
    if (commentsFormServer.length === 0 || commentsFormServer.length < 100) {
        sethasMore(false);
    }
      setpage(page + 1);
    
  };
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchData}
      hasMore={hasMore}
    >
      <div className="container">
        {items.map((x) => {
          return (
            <div className="data" style={{paddingLeft:"10px"}}>
              <p><span style={{fontWeight:"bold"}}>ID:{x.id}</span></p>
              <p><span style={{color:"blue"}}>Title: </span>{x.title}</p>
              <img src={x.thumbnailUrl} alt="" />
            </div>
          );
        })}
      </div>

    </InfiniteScroll>
  );
}

export default Data2