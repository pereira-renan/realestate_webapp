module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },
  env: {
    customKey:
      "eyJhbGciOiJSUzI1NiJ9.eyJvcmdhbml6YXRpb25JZCI6IjhiM2Q4ZjM5LWU4YTctNDFjNC1hNzY1LTMyZTQ5M2QxYzQ2YSIsInN5c0FkbWluVmlld01vZGUiOmZhbHNlLCJwcm9maWxlIjoiMiIsImNyZWRlbnRpYWxJZCI6IjZhMWY0ZTEzLWJmMjYtNDEzOS1iYTYzLWZmODVlYTEzM2MyYSIsInVzZXJFbWFpbCI6InJlbmFuLnBlcmVpcmFAZWRlbnJlZC5jb20iLCJ1c2VySWQiOiIwY2Q5ZTY4NS1mMWYzLTQ4MDUtYjNlNS0wNWQzN2ViYWI2ZjUiLCJwbGFuIjoiRU5URVJQUklTRSIsImp0aSI6ImEzZGY2ZTU0MmYyMDRkZThhZGNjNzkyNTY2NmIxMDM3In0.M4yXyOjikechgy4A_th4sSCVW_Vk8-nXGnePHeSb0q9I-gs4e99b4KDQ-EOUuSW2xDeuokgbWlul4BZVmbN3Ka1p04mmxstYoPvTNpNcmP-WjwQ-dlDTRAONwBdde1Wf-8XHBE54KhXQoyRDpeW6z-9Zd0gXWGyeLnUSqnooXSt7nup3LHL7xr7cCEk-g6Feg6_giU40ONW9Yl6KcMZIvG-vpweIL2KoDIZsH2TcNJFzVG_DW0mz6XqQWtG2SzfYKwDzjMt86ThB1kIo2iXdg-B90gZWWzbN4KrotO229Tu64CLyyjWZHNYZnA3IN7wzEfLUvhTCi_1TM5k49kL_FQ",
    baseUrl:
      "https://sandbox-control.zenvia.com/api/v1/sandboxes/ef0bbc59-a817-43e7-8117-66d9a0f5ae93",
    title: "zenStatus",
    MONGO_URI:
      "mongodb+srv://dukejs:8vXnLCWHN6FWOYw8@cluster.niqks.mongodb.net/zen?retryWrites=true&w=majority",
    MONGO_DB: "sample_mflix",
  },
}
/*
module.exports = () => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1"
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1"

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

  const env = {
    RESTURL_SPEAKERS: (() => {
      if (isDev) return "http://localhost:4000/speakers"
      if (isProd) {
        return "https://www.siliconvalley-codecamp.com/rest/speakers/ps"
      }
      if (isStaging) return "http://localhost:11639"
      return "RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)"
    })(),
    RESTURL_SESSIONS: (() => {
      if (isDev) return "http://localhost:4000/sessions"
      if (isProd) return "https://www.siliconvalley-codecamp.com/rest/sessions"
      if (isStaging) return "http://localhost:11639"
      return "RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)"
    })(),
  }

  // next.config.js object
  return {
    env,
  }
}
*/
