export default function handler(요청, 응답) {
  console.log(요청.query);
  응답.status(200).json(요청.body);
}
