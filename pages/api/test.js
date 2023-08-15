export default function handler(요청, 응답) {
  if (요청.method == "POST") {
    응답.status(200).json(요청.body);
  }
}
