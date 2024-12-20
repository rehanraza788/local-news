import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export const Video = () => {
  const videos = [
    {
      image: "/public/images/ravish Kumar.jpg",
      link: "https://www.youtube.com/embed/AT4akiCE35s?si=Y81ybCBHgMdOzxSR",
      title: "किसने विरोध किया था पटेल के प्रधानमंत्री बनने का?",
      author: "Ravish Kumar Official",
      page: "https://www.youtube.com/@ravishkumar.official"
    },
    {
      image: "/public/images/ravish Kumar.jpg",
      link: "https://www.youtube.com/embed/ibwe0ZONdaA?si=WUdpgkyxFJNxs_pZ",
      title: "संविधान बहस: संसद में राहुल का भाषण",
      author: "Ravish Kumar Official"
    },
    {
      image: "/public/images/Abhisar Sharma.jpg",
      link: "https://www.youtube.com/embed/VH_ill-QX_g?si=YDQhYqSiZIzdX5Kp",
      title:
        "सम्भल मंदिर पर पकड़ा गया गोदी मीडिया-बीजेपी का झूठ! बीजेपी गठबंधन में क्यों पड़ी दरार?",
      author: "Abhisar Sharma"
    },
    {
      image: "/public/images/ravish Kumar.jpg",
      link: "https://www.youtube.com/embed/IdWHUJiUjKU?si=2YMdba_QxQnN_2M8",
      title: "अदाणी मामले पर कब होगा JPC का गठन? वापिस आया सोरोस का भूत",
      author: "Ravish Kumar Official"
    },
    {
      image: "/public/images/ravish Kumar.jpg",
      link: "https://www.youtube.com/embed/sGDU6ERuoVc?si=cjQmYk3WVvx-T8qU",
      title: "सँभल में बुलडोज़र चल सकता है, राहुल नहीं जा सकते?",
      author: "Ravish Kumar Official"
    },
    {
      image: "/public/images/ravish Kumar.jpg",
      link: "https://www.youtube.com/embed/rbWhlllJszg?si=lkscP0DjKIDmWj6i",
      title: "क्यों चौंका दिया महाराष्ट्र के नतीजे ने?",
      author: "Ravish Kumar official"
    },
    {
      image: "/public/images/ravish Kumar.jpg",
      link: "https://www.youtube.com/embed/oOYpTbGekp0?si=flZSUrwhf3BsRTDL",
      title: "अंबेडकर, नेहरू और अमित शाह का बयान",
      author: "Ravish Kumar Official"
    },
    {
      image: "/public/images/Abhisar Sharma.jpg",
      link: "https://www.youtube.com/embed/pJZzE96Je-0?si=qQxjknDC0YQo7Ecm",
      title:
        "बाबासाहेब अम्बेडकर पर अमित शाह कॉंग्रेस आमने सामने! इस्तीफे पर क्या कह गए शाह!",
      author: "Abhisar Sharma"
    },
    {
      image: "/public/images/ravish Kumar.jpg",
      link: "https://www.youtube.com/embed/d0ZrAbUvK7k?si=TqIm_prAn4TeZZ6T",
      title: "क्या अंतर है, मनोज झा के नेहरू और कांग्रेस के नेहरू में",
      author: "Ravish Kumar Official"
    },
    {
      image: "/public/images/Abhisar Sharma.jpg",
      link: "https://www.youtube.com/embed/S8dEU25mnP8?si=zzVr_EpTjfBophCG",
      title:
        "संसद में अडानी पर प्रदर्शन का चौदहवां दिन विपक्ष के साथ ऐसी नाइंसाफी दर्द बांटने राहुल पहुंचे हाथरस!",
      author: "Abhisar sharma"
    },
    {
      image: "/public/images/Abhisar Sharma.jpg",
      link: "https://www.youtube.com/embed/6g5H7verngA?si=SvqcFBBQ-SPjUhjF",
      title:
        "नफरत के खिलाफ दिलजीत का दिल जीतने वाला बयान !क्यों लगी नफरती चिंटूओं को मिर्ची?",
      author: "Abhisar sharma"
    },
    {
      image: "/public/images/Abhisar Sharma.jpg",
      link: "https://www.youtube.com/embed/xuw56N-wS5U?si=32wQNtDHajo4QWU9",
      title:
        "अमित शाह ने सदन में किया बाबा साहब अम्बेडकर का अपमान? बीजेपी ने खुद के पैर पर मारी कुल्हाड़ी!",
      author: "Abhisar sharma"
    }
  ];

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#3f51b5", fontWeight: "bold" }}
      >
        My Favorite Videos
      </Typography>
      <Grid container spacing={2} justifyContent="center" rowGap={2}>
        {videos.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                position: "relative",
                paddingTop: "56.25%", // 16:9 Aspect Ratio
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
              }}
            >
              <iframe
                src={video.link}
                title={`YouTube Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none"
                }}
                allowFullScreen
              ></iframe>
            </Box>
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  marginLeft: "12px",
                  fontWeight: "bold",
                  marginTop: "15px",
                  marginBottom: "5px",
                  fontFamily: "serif"
                }}
              >
                {video.title}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={video.image}
                  alt=""
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%" }}
                />
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    marginTop: "2px",
                    marginLeft: "12px",
                    fontWeight: "bold"
                  }}
                >
                  {video.author}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
