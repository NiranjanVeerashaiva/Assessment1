import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import '../css/data2.css'
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
    <div className="data2">
    <InfiniteScroll
      dataLength={items.length}
      next={fetchData}
      hasMore={hasMore}
    >
      <div className="container">
        {items.map((x) => {
          return (
            <div class="card bg-dark" style={{ width: "15rem",border:"none",borderRadius:"0rem"}}>
              <div className="id" style={{ border: "0.1rem solid black", textAlign: "center", backgroundColor: "black", color: "white" }}>
                <h5 class="card-title"><span>Card ID:</span>{x.id}</h5>
              </div>
              <img src={x.thumbnailUrl} class="card-img-top" alt="..." />
              <h5 class="card-title text-light"><span class="text-danger">Title:</span>{x.title}</h5>
            </div>
          );
        })}
      </div>

    </InfiniteScroll>
    </div>

  );
}

export default Data2