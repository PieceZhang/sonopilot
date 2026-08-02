window.SONOPILOT_CONTENT = {
  site: {
    name: "SonoPilot",
    description:
      "A Vision-Language-Action robotic system for ultrasound-guided needle intervention.",
    deployedUrl: "https://piecezhang.github.io/sonopilot/",
    contactEmail: "zhangyuelin@link.cuhk.edu.hk",
    piEmail: "sscheng@cuhk.edu.hk",
  },
  links: {
    demo: "https://youtu.be/dLesUszkwZw",
    paper: "https://arxiv.org/abs/2604.20347",
    arxiv: "https://arxiv.org/abs/2604.20347",
    websiteRepository: "https://github.com/PieceZhang/sonopilot",
    marketSource: "{{MARKET_SOURCE_URL}}",
    clips: {
      localization: "{{NEEDLE_LOCALIZATION_CLIP_URL}}",
      insertion: "{{AUTONOMOUS_INSERTION_CLIP_URL}}",
      probeAdjustment: "{{PROBE_ADJUSTMENT_CLIP_URL}}",
      uncertainty: "{{UNCERTAINTY_HANDLING_CLIP_URL}}",
    },
  },
  metrics: [
    { value: "3.01", unit: "mm", label: "Needle localization error" },
    { value: "25.1", unit: "FPS", label: "Real-time perception" },
    { value: "80", unit: "%", label: "Target-hit success rate" },
    { value: "17.3", unit: "s", label: "Average intervention time" },
  ],
  publications: [
    {
      year: "2026",
      name: "SonoPilot",
      title:
        "A Vision-Language-Action Model for Adaptive Ultrasound-Guided Needle Insertion and Needle Tracking",
      authors:
        "Yuelin Zhang, Qingpeng Ding, Longxiang Tang, Chengyu Fang, Shing Shin Cheng",
      venue: "IEEE International Conference on Robotics and Automation (ICRA 2026)",
      url: "https://arxiv.org/abs/2604.20347",
      phase: "Vision-Language-Action",
    },
    {
      year: "2026",
      name: "Open-H-Embodiment",
      title:
        "Open-H-Embodiment: A large-scale dataset for enabling foundation models in medical robotics",
      authors: "Open-H-Embodiment Consortium, including the SonoPilot team",
      venue: "arXiv preprint",
      url: "https://arxiv.org/abs/2604.21017",
      phase: "Foundation / embodied data",
    },
    {
      year: "2025",
      name: "MrTrack",
      title:
        "MrTrack: Register Mamba for Needle Tracking with Rapid Reciprocating Motion during Ultrasound-Guided Aspiration Biopsy",
      authors: "Yuelin Zhang et al.",
      venue: "MICCAI 2025 (Early Accepted)",
      url: "https://doi.org/10.1007/978-3-032-04927-8_39",
      phase: "Perception",
    },
    {
      year: "2025",
      name: "MambaXCTrack",
      title:
        "MambaXCTrack: Mamba-Based Tracker With SSM Cross-Correlation and Motion Prompt for Ultrasound Needle Tracking",
      authors: "Yuelin Zhang et al.",
      venue: "IEEE Robotics and Automation Letters, 10(5), 5130-5137",
      url: "https://doi.org/10.1109/LRA.2025.3558377",
      phase: "Perception",
    },
    {
      year: "2026",
      name: "DreamReg",
      title:
        "DreamReg: Belief-Driven World Model for 2D-3D Ultrasound Registration",
      authors: "Luoyao Kang, Yuelin Zhang et al.",
      venue: "MICCAI 2026 (Early Accepted)",
      url: "https://arxiv.org/abs/2606.18825",
      phase: "World models",
    },
  ],
  resources: [
    {
      name: "Autonomous Needle Insertion",
      description:
        "A Dockerized ROS 2 platform for dual-arm robotic ultrasound-guided needle insertion, tracking, calibration, and motion control.",
      url: "https://github.com/PieceZhang/autonomous_needle_insertion",
    },
    {
      name: "US-PPNR Dataset",
      description:
        "A multimodal embodied dataset for training VLA policies in ultrasound-guided probe placement and needle retrieval.",
      url: "https://github.com/PieceZhang/US-PPNR-Dataset",
    },
    {
      name: "MrTrack",
      description:
        "A Mamba-based tracker for needles undergoing rapid reciprocating motion in ultrasound-guided aspiration biopsy.",
      url: "https://github.com/PieceZhang/MrTrack",
    },
    {
      name: "NeedleShapeModeling",
      description:
        "A physics-based toolkit for real-time 3D needle deflection estimation from force-torque measurements.",
      url: "https://github.com/PieceZhang/NeedleShapeModeling",
    },
  ],
  people: [
    {
      group: "Principal Investigator",
      name: "Shing Shin Cheng",
      role: "Associate Professor",
      affiliation:
        "Department of Mechanical and Automation Engineering; Surgical Robotics and Instrumentation Laboratory (SRIL), The Chinese University of Hong Kong",
      image: "shing-shin-cheng.png",
      imageWidth: 1272,
      imageHeight: 1590,
      profileUrl: "{{SHING_SHIN_CHENG_PROFILE_URL}}",
    },
    {
      group: "SonoPilot Team",
      name: "Yuelin Zhang",
      role: "PhD Student",
      affiliation: "SRIL, The Chinese University of Hong Kong",
      image: "yuelin-zhang.png",
      imageWidth: 1536,
      imageHeight: 1920,
      profileUrl: "{{YUELIN_ZHANG_PROFILE_URL}}",
    },
    {
      group: "SonoPilot Team",
      name: "Qingpeng Ding",
      role: "Research Associate",
      affiliation: "SRIL, The Chinese University of Hong Kong",
      image: "qingpeng-ding.png",
      imageWidth: 492,
      imageHeight: 615,
      profileUrl: "{{QINGPENG_DING_PROFILE_URL}}",
    },
    {
      group: "SonoPilot Team",
      name: "Zhouyang Hong",
      role: "PhD Student",
      affiliation: "SRIL, The Chinese University of Hong Kong",
      image: "zhouyang-hong.png",
      imageWidth: 2764,
      imageHeight: 3455,
      profileUrl: "{{ZHOUYANG_HONG_PROFILE_URL}}",
    },
    {
      group: "SonoPilot Team",
      name: "Luoyao Kang",
      role: "PhD Student",
      affiliation: "SRIL, The Chinese University of Hong Kong",
      image: "luoyao-kang.png",
      imageWidth: 1148,
      imageHeight: 1435,
      profileUrl: "{{LUOYAO_KANG_PROFILE_URL}}",
    },
    {
      group: "SonoPilot Team",
      name: "Wenxuan Xie",
      role: "PhD Student",
      affiliation: "SRIL, The Chinese University of Hong Kong",
      image: "wenxuan-xie.png",
      imageWidth: 1200,
      imageHeight: 1500,
      profileUrl: "{{WENXUAN_XIE_PROFILE_URL}}",
    },
    {
      group: "Clinical Advisory Board",
      name: "Wei Wang",
      role: "Professor",
      affiliation: "The First Affiliated Hospital, Sun Yat-Sen University",
      image: "{{WEI_WANG_PORTRAIT}}",
      profileUrl: "{{WEI_WANG_PROFILE_URL}}",
    },
    {
      group: "Clinical Advisory Board",
      name: "Shing-Yan Raymond Tang",
      role: "Assistant Professor",
      affiliation:
        "Department of Medicine and Therapeutics, Faculty of Medicine, The Chinese University of Hong Kong",
      image: "{{SHING_YAN_RAYMOND_TANG_PORTRAIT}}",
      profileUrl: "{{SHING_YAN_RAYMOND_TANG_PROFILE_URL}}",
    },
  ],
  institutionLogos: {
    cuhk: "{{INSTITUTION_LOGO_CUHK}}",
    sril: "{{INSTITUTION_LOGO_SRIL}}",
    mmrc: "{{INSTITUTION_LOGO_MMRC}}",
    sysuHospital: "{{INSTITUTION_LOGO_SYSU_HOSPITAL}}",
  },
};
