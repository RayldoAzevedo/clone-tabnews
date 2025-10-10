function handler(req, res) {
  // res.status(200).json({ status: 'ok' });
  res
    .status(200)
    .json({ message: "Está funcionando a api de teste inicial", status: "ok" });
}

export default handler;
