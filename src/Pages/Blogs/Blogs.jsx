

const Blogs = () => {
    return (
        <div className="my-6">
            
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token?How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>Refresh tokens allow you to balance your users access needs with your organizations security practices. Access tokens help users get the resources they need to complete their tasks.</p>
                    <p>Modern web browsers support a number of ways for websites to store data on the users computer — with the users permission — then retrieve it when necessary. </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is express js?What is Nest JS ?
                </div>
                <div className="collapse-content">
                    <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. </p>
                    <p>Nest. js is a server-side Node. js framework that is great for building highly testable and maintainable backend applications.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is MongoDB aggregate and how does it work ?
                </div>
                <div className="collapse-content">
                    <p> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;