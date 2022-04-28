/*
 * @Description:
 * @Author: lixiaoxin
 * @Date: 2022-04-12 17:27:23
 * @LastEditors: lixiaoxin
 * @LastEditTime: 2022-04-12 17:52:26
 */
function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
