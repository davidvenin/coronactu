import httpProxyMiddleware from "next-http-proxy-middleware";
import { NextApiRequest, NextApiResponse } from "next";

const isDevelopment = process.env.NODE_ENV !== "production";

export default (req: NextApiRequest, res: NextApiResponse) =>
  isDevelopment
    ? httpProxyMiddleware(req, res, {
        // You can use the `http-proxy` option
        target: "https://api.first.org/data/v1/countries",
        // In addition, you can use the `pathRewrite` option provided by `next-http-proxy-middleware`
        pathRewrite: [
          {
            patternStr: "/api/v1/countries",
            replaceStr: "",
          },
        ],
      })
    : res.status(404).send(null);
