let allColors = [
    [
        "#DC9FB4",
        "#E16B8C",
        "#8E354A",
        "#F8C3CD",
        "#F4A7B9"
    ],
    [
        "#E16B8C",
        "#8E354A",
        "#F8C3CD",
        "#F4A7B9",
        "#64363C"
    ],
    [
        "#8E354A",
        "#F8C3CD",
        "#F4A7B9",
        "#64363C",
        "#F596AA"
    ],
    [
        "#F8C3CD",
        "#F4A7B9",
        "#64363C",
        "#F596AA",
        "#B5495B"
    ],
    [
        "#F4A7B9",
        "#64363C",
        "#F596AA",
        "#B5495B",
        "#E87A90"
    ],
    [
        "#64363C",
        "#F596AA",
        "#B5495B",
        "#E87A90",
        "#D05A6E"
    ],
    [
        "#F596AA",
        "#B5495B",
        "#E87A90",
        "#D05A6E",
        "#DB4D6D"
    ],
    [
        "#B5495B",
        "#E87A90",
        "#D05A6E",
        "#DB4D6D",
        "#FEDFE1"
    ],
    [
        "#E87A90",
        "#D05A6E",
        "#DB4D6D",
        "#FEDFE1",
        "#9E7A7A"
    ],
    [
        "#D05A6E",
        "#DB4D6D",
        "#FEDFE1",
        "#9E7A7A",
        "#D0104C"
    ],
    [
        "#DB4D6D",
        "#FEDFE1",
        "#9E7A7A",
        "#D0104C",
        "#9F353A"
    ],
    [
        "#FEDFE1",
        "#9E7A7A",
        "#D0104C",
        "#9F353A",
        "#CB1B45"
    ],
    [
        "#9E7A7A",
        "#D0104C",
        "#9F353A",
        "#CB1B45",
        "#EEA9A9"
    ],
    [
        "#D0104C",
        "#9F353A",
        "#CB1B45",
        "#EEA9A9",
        "#BF6766"
    ],
    [
        "#9F353A",
        "#CB1B45",
        "#EEA9A9",
        "#BF6766",
        "#86473F"
    ],
    [
        "#CB1B45",
        "#EEA9A9",
        "#BF6766",
        "#86473F",
        "#B19693"
    ],
    [
        "#EEA9A9",
        "#BF6766",
        "#86473F",
        "#B19693",
        "#EB7A77"
    ],
    [
        "#BF6766",
        "#86473F",
        "#B19693",
        "#EB7A77",
        "#954A45"
    ],
    [
        "#86473F",
        "#B19693",
        "#EB7A77",
        "#954A45",
        "#A96360"
    ],
    [
        "#B19693",
        "#EB7A77",
        "#954A45",
        "#A96360",
        "#CB4042"
    ],
    [
        "#EB7A77",
        "#954A45",
        "#A96360",
        "#CB4042",
        "#AB3B3A"
    ],
    [
        "#954A45",
        "#A96360",
        "#CB4042",
        "#AB3B3A",
        "#D7C4BB"
    ],
    [
        "#A96360",
        "#CB4042",
        "#AB3B3A",
        "#D7C4BB",
        "#904840"
    ],
    [
        "#CB4042",
        "#AB3B3A",
        "#D7C4BB",
        "#904840",
        "#734338"
    ],
    [
        "#AB3B3A",
        "#D7C4BB",
        "#904840",
        "#734338",
        "#C73E3A"
    ],
    [
        "#D7C4BB",
        "#904840",
        "#734338",
        "#C73E3A",
        "#554236"
    ],
    [
        "#904840",
        "#734338",
        "#C73E3A",
        "#554236",
        "#994639"
    ],
    [
        "#734338",
        "#C73E3A",
        "#554236",
        "#994639",
        "#F19483"
    ],
    [
        "#C73E3A",
        "#554236",
        "#994639",
        "#F19483",
        "#B54434"
    ],
    [
        "#554236",
        "#994639",
        "#F19483",
        "#B54434",
        "#B9887D"
    ],
    [
        "#994639",
        "#F19483",
        "#B54434",
        "#B9887D",
        "#F17C67"
    ],
    [
        "#F19483",
        "#B54434",
        "#B9887D",
        "#F17C67",
        "#884C3A"
    ],
    [
        "#B54434",
        "#B9887D",
        "#F17C67",
        "#884C3A",
        "#E83015"
    ],
    [
        "#B9887D",
        "#F17C67",
        "#884C3A",
        "#E83015",
        "#D75455"
    ],
    [
        "#F17C67",
        "#884C3A",
        "#E83015",
        "#D75455",
        "#B55D4C"
    ],
    [
        "#884C3A",
        "#E83015",
        "#D75455",
        "#B55D4C",
        "#854836"
    ],
    [
        "#E83015",
        "#D75455",
        "#B55D4C",
        "#854836",
        "#A35E47"
    ],
    [
        "#D75455",
        "#B55D4C",
        "#854836",
        "#A35E47",
        "#CC543A"
    ],
    [
        "#B55D4C",
        "#854836",
        "#A35E47",
        "#CC543A",
        "#724832"
    ],
    [
        "#854836",
        "#A35E47",
        "#CC543A",
        "#724832",
        "#F75C2F"
    ],
    [
        "#A35E47",
        "#CC543A",
        "#724832",
        "#F75C2F",
        "#6A4028"
    ],
    [
        "#CC543A",
        "#724832",
        "#F75C2F",
        "#6A4028",
        "#9A5034"
    ],
    [
        "#724832",
        "#F75C2F",
        "#6A4028",
        "#9A5034",
        "#C46243"
    ],
    [
        "#F75C2F",
        "#6A4028",
        "#9A5034",
        "#C46243",
        "#AF5F3C"
    ],
    [
        "#6A4028",
        "#9A5034",
        "#C46243",
        "#AF5F3C",
        "#FB966E"
    ],
    [
        "#9A5034",
        "#C46243",
        "#AF5F3C",
        "#FB966E",
        "#724938"
    ],
    [
        "#C46243",
        "#AF5F3C",
        "#FB966E",
        "#724938",
        "#B47157"
    ],
    [
        "#AF5F3C",
        "#FB966E",
        "#724938",
        "#B47157",
        "#DB8E71"
    ],
    [
        "#FB966E",
        "#724938",
        "#B47157",
        "#DB8E71",
        "#F05E1C"
    ],
    [
        "#724938",
        "#B47157",
        "#DB8E71",
        "#F05E1C",
        "#ED784A"
    ],
    [
        "#B47157",
        "#DB8E71",
        "#F05E1C",
        "#ED784A",
        "#CA7853"
    ],
    [
        "#DB8E71",
        "#F05E1C",
        "#ED784A",
        "#CA7853",
        "#B35C37"
    ],
    [
        "#F05E1C",
        "#ED784A",
        "#CA7853",
        "#B35C37",
        "#563F2E"
    ],
    [
        "#ED784A",
        "#CA7853",
        "#B35C37",
        "#563F2E",
        "#E3916E"
    ],
    [
        "#CA7853",
        "#B35C37",
        "#563F2E",
        "#E3916E",
        "#8F5A3C"
    ],
    [
        "#B35C37",
        "#563F2E",
        "#E3916E",
        "#8F5A3C",
        "#F0A986"
    ],
    [
        "#563F2E",
        "#E3916E",
        "#8F5A3C",
        "#F0A986",
        "#A0674B"
    ],
    [
        "#E3916E",
        "#8F5A3C",
        "#F0A986",
        "#A0674B",
        "#C1693C"
    ],
    [
        "#8F5A3C",
        "#F0A986",
        "#A0674B",
        "#C1693C",
        "#FB9966"
    ],
    [
        "#F0A986",
        "#A0674B",
        "#C1693C",
        "#FB9966",
        "#947A6D"
    ],
    [
        "#A0674B",
        "#C1693C",
        "#FB9966",
        "#947A6D",
        "#A36336"
    ],
    [
        "#C1693C",
        "#FB9966",
        "#947A6D",
        "#A36336",
        "#E79460"
    ],
    [
        "#FB9966",
        "#947A6D",
        "#A36336",
        "#E79460",
        "#7D532C"
    ],
    [
        "#947A6D",
        "#A36336",
        "#E79460",
        "#7D532C",
        "#C78550"
    ],
    [
        "#A36336",
        "#E79460",
        "#7D532C",
        "#C78550",
        "#985F2A"
    ],
    [
        "#E79460",
        "#7D532C",
        "#C78550",
        "#985F2A",
        "#E1A679"
    ],
    [
        "#7D532C",
        "#C78550",
        "#985F2A",
        "#E1A679",
        "#855B32"
    ],
    [
        "#C78550",
        "#985F2A",
        "#E1A679",
        "#855B32",
        "#FC9F4D"
    ],
    [
        "#985F2A",
        "#E1A679",
        "#855B32",
        "#FC9F4D",
        "#FFBA84"
    ],
    [
        "#E1A679",
        "#855B32",
        "#FC9F4D",
        "#FFBA84",
        "#E98B2A"
    ],
    [
        "#855B32",
        "#FC9F4D",
        "#FFBA84",
        "#E98B2A",
        "#E9A368"
    ],
    [
        "#FC9F4D",
        "#FFBA84",
        "#E98B2A",
        "#E9A368",
        "#B17844"
    ],
    [
        "#FFBA84",
        "#E98B2A",
        "#E9A368",
        "#B17844",
        "#96632E"
    ],
    [
        "#E98B2A",
        "#E9A368",
        "#B17844",
        "#96632E",
        "#43341B"
    ],
    [
        "#E9A368",
        "#B17844",
        "#96632E",
        "#43341B",
        "#CA7A2C"
    ],
    [
        "#B17844",
        "#96632E",
        "#43341B",
        "#CA7A2C",
        "#ECB88A"
    ],
    [
        "#96632E",
        "#43341B",
        "#CA7A2C",
        "#ECB88A",
        "#78552B"
    ],
    [
        "#43341B",
        "#CA7A2C",
        "#ECB88A",
        "#78552B",
        "#B07736"
    ],
    [
        "#CA7A2C",
        "#ECB88A",
        "#78552B",
        "#B07736",
        "#967249"
    ],
    [
        "#ECB88A",
        "#78552B",
        "#B07736",
        "#967249",
        "#E2943B"
    ],
    [
        "#78552B",
        "#B07736",
        "#967249",
        "#E2943B",
        "#C7802D"
    ],
    [
        "#B07736",
        "#967249",
        "#E2943B",
        "#C7802D",
        "#9B6E23"
    ],
    [
        "#967249",
        "#E2943B",
        "#C7802D",
        "#9B6E23",
        "#6E552F"
    ],
    [
        "#E2943B",
        "#C7802D",
        "#9B6E23",
        "#6E552F",
        "#EBB471"
    ],
    [
        "#C7802D",
        "#9B6E23",
        "#6E552F",
        "#EBB471",
        "#D7B98E"
    ],
    [
        "#9B6E23",
        "#6E552F",
        "#EBB471",
        "#D7B98E",
        "#82663A"
    ],
    [
        "#6E552F",
        "#EBB471",
        "#D7B98E",
        "#82663A",
        "#B68E55"
    ],
    [
        "#EBB471",
        "#D7B98E",
        "#82663A",
        "#B68E55",
        "#BC9F77"
    ],
    [
        "#D7B98E",
        "#82663A",
        "#B68E55",
        "#BC9F77",
        "#876633"
    ],
    [
        "#82663A",
        "#B68E55",
        "#BC9F77",
        "#876633",
        "#C18A26"
    ],
    [
        "#B68E55",
        "#BC9F77",
        "#876633",
        "#C18A26",
        "#FFB11B"
    ],
    [
        "#BC9F77",
        "#876633",
        "#C18A26",
        "#FFB11B",
        "#D19826"
    ],
    [
        "#876633",
        "#C18A26",
        "#FFB11B",
        "#D19826",
        "#DDA52D"
    ],
    [
        "#C18A26",
        "#FFB11B",
        "#D19826",
        "#DDA52D",
        "#C99833"
    ],
    [
        "#FFB11B",
        "#D19826",
        "#DDA52D",
        "#C99833",
        "#F9BF45"
    ],
    [
        "#D19826",
        "#DDA52D",
        "#C99833",
        "#F9BF45",
        "#DCB879"
    ],
    [
        "#DDA52D",
        "#C99833",
        "#F9BF45",
        "#DCB879",
        "#BA9132"
    ],
    [
        "#C99833",
        "#F9BF45",
        "#DCB879",
        "#BA9132",
        "#E8B647"
    ],
    [
        "#F9BF45",
        "#DCB879",
        "#BA9132",
        "#E8B647",
        "#F7C242"
    ],
    [
        "#DCB879",
        "#BA9132",
        "#E8B647",
        "#F7C242",
        "#7D6C46"
    ],
    [
        "#BA9132",
        "#E8B647",
        "#F7C242",
        "#7D6C46",
        "#DAC9A6"
    ],
    [
        "#E8B647",
        "#F7C242",
        "#7D6C46",
        "#DAC9A6",
        "#FAD689"
    ],
    [
        "#F7C242",
        "#7D6C46",
        "#DAC9A6",
        "#FAD689",
        "#D9AB42"
    ],
    [
        "#7D6C46",
        "#DAC9A6",
        "#FAD689",
        "#D9AB42",
        "#F6C555"
    ],
    [
        "#DAC9A6",
        "#FAD689",
        "#D9AB42",
        "#F6C555",
        "#FFC408"
    ],
    [
        "#FAD689",
        "#D9AB42",
        "#F6C555",
        "#FFC408",
        "#EFBB24"
    ],
    [
        "#D9AB42",
        "#F6C555",
        "#FFC408",
        "#EFBB24",
        "#CAAD5F"
    ],
    [
        "#F6C555",
        "#FFC408",
        "#EFBB24",
        "#CAAD5F",
        "#8D742A"
    ],
    [
        "#FFC408",
        "#EFBB24",
        "#CAAD5F",
        "#8D742A",
        "#B4A582"
    ],
    [
        "#EFBB24",
        "#CAAD5F",
        "#8D742A",
        "#B4A582",
        "#877F6C"
    ],
    [
        "#CAAD5F",
        "#8D742A",
        "#B4A582",
        "#877F6C",
        "#897D55"
    ],
    [
        "#8D742A",
        "#B4A582",
        "#877F6C",
        "#897D55",
        "#74673E"
    ],
    [
        "#B4A582",
        "#877F6C",
        "#897D55",
        "#74673E",
        "#A28C37"
    ],
    [
        "#877F6C",
        "#897D55",
        "#74673E",
        "#A28C37",
        "#6C6024"
    ],
    [
        "#897D55",
        "#74673E",
        "#A28C37",
        "#6C6024",
        "#867835"
    ],
    [
        "#74673E",
        "#A28C37",
        "#6C6024",
        "#867835",
        "#62592C"
    ],
    [
        "#A28C37",
        "#6C6024",
        "#867835",
        "#62592C",
        "#E9CD4C"
    ],
    [
        "#6C6024",
        "#867835",
        "#62592C",
        "#E9CD4C",
        "#F7D94C"
    ],
    [
        "#867835",
        "#62592C",
        "#E9CD4C",
        "#F7D94C",
        "#FBE251"
    ],
    [
        "#62592C",
        "#E9CD4C",
        "#F7D94C",
        "#FBE251",
        "#D9CD90"
    ],
    [
        "#E9CD4C",
        "#F7D94C",
        "#FBE251",
        "#D9CD90",
        "#ADA142"
    ],
    [
        "#F7D94C",
        "#FBE251",
        "#D9CD90",
        "#ADA142",
        "#DDD23B"
    ],
    [
        "#FBE251",
        "#D9CD90",
        "#ADA142",
        "#DDD23B",
        "#A5A051"
    ],
    [
        "#D9CD90",
        "#ADA142",
        "#DDD23B",
        "#A5A051",
        "#BEC23F"
    ],
    [
        "#ADA142",
        "#DDD23B",
        "#A5A051",
        "#BEC23F",
        "#6C6A2D"
    ],
    [
        "#DDD23B",
        "#A5A051",
        "#BEC23F",
        "#6C6A2D",
        "#939650"
    ],
    [
        "#A5A051",
        "#BEC23F",
        "#6C6A2D",
        "#939650",
        "#838A2D"
    ],
    [
        "#BEC23F",
        "#6C6A2D",
        "#939650",
        "#838A2D",
        "#B1B479"
    ],
    [
        "#6C6A2D",
        "#939650",
        "#838A2D",
        "#B1B479",
        "#616138"
    ],
    [
        "#939650",
        "#838A2D",
        "#B1B479",
        "#616138",
        "#4B4E2A"
    ],
    [
        "#838A2D",
        "#B1B479",
        "#616138",
        "#4B4E2A",
        "#5B622E"
    ],
    [
        "#B1B479",
        "#616138",
        "#4B4E2A",
        "#5B622E",
        "#4D5139"
    ],
    [
        "#616138",
        "#4B4E2A",
        "#5B622E",
        "#4D5139",
        "#89916B"
    ],
    [
        "#4B4E2A",
        "#5B622E",
        "#4D5139",
        "#89916B",
        "#90B44B"
    ],
    [
        "#5B622E",
        "#4D5139",
        "#89916B",
        "#90B44B",
        "#91AD70"
    ],
    [
        "#4D5139",
        "#89916B",
        "#90B44B",
        "#91AD70",
        "#B5CAA0"
    ],
    [
        "#89916B",
        "#90B44B",
        "#91AD70",
        "#B5CAA0",
        "#646A58"
    ],
    [
        "#90B44B",
        "#91AD70",
        "#B5CAA0",
        "#646A58",
        "#7BA23F"
    ],
    [
        "#91AD70",
        "#B5CAA0",
        "#646A58",
        "#7BA23F",
        "#86C166"
    ],
    [
        "#B5CAA0",
        "#646A58",
        "#7BA23F",
        "#86C166",
        "#4A593D"
    ],
    [
        "#646A58",
        "#7BA23F",
        "#86C166",
        "#4A593D",
        "#42602D"
    ],
    [
        "#7BA23F",
        "#86C166",
        "#4A593D",
        "#42602D",
        "#516E41"
    ],
    [
        "#86C166",
        "#4A593D",
        "#42602D",
        "#516E41",
        "#91B493"
    ],
    [
        "#4A593D",
        "#42602D",
        "#516E41",
        "#91B493",
        "#808F7C"
    ],
    [
        "#42602D",
        "#516E41",
        "#91B493",
        "#808F7C",
        "#1B813E"
    ],
    [
        "#516E41",
        "#91B493",
        "#808F7C",
        "#1B813E",
        "#5DAC81"
    ],
    [
        "#91B493",
        "#808F7C",
        "#1B813E",
        "#5DAC81",
        "#36563C"
    ],
    [
        "#808F7C",
        "#1B813E",
        "#5DAC81",
        "#36563C",
        "#227D51"
    ],
    [
        "#1B813E",
        "#5DAC81",
        "#36563C",
        "#227D51",
        "#A8D8B9"
    ],
    [
        "#5DAC81",
        "#36563C",
        "#227D51",
        "#A8D8B9",
        "#6A8372"
    ],
    [
        "#36563C",
        "#227D51",
        "#A8D8B9",
        "#6A8372",
        "#2D6D4B"
    ],
    [
        "#227D51",
        "#A8D8B9",
        "#6A8372",
        "#2D6D4B",
        "#465D4C"
    ],
    [
        "#A8D8B9",
        "#6A8372",
        "#2D6D4B",
        "#465D4C",
        "#24936E"
    ],
    [
        "#6A8372",
        "#2D6D4B",
        "#465D4C",
        "#24936E",
        "#86A697"
    ],
    [
        "#2D6D4B",
        "#465D4C",
        "#24936E",
        "#86A697",
        "#00896C"
    ],
    [
        "#465D4C",
        "#24936E",
        "#86A697",
        "#00896C",
        "#096148"
    ],
    [
        "#24936E",
        "#86A697",
        "#00896C",
        "#096148",
        "#20604F"
    ],
    [
        "#86A697",
        "#00896C",
        "#096148",
        "#20604F",
        "#0F4C3A"
    ],
    [
        "#00896C",
        "#096148",
        "#20604F",
        "#0F4C3A",
        "#4F726C"
    ],
    [
        "#096148",
        "#20604F",
        "#0F4C3A",
        "#4F726C",
        "#00AA90"
    ],
    [
        "#20604F",
        "#0F4C3A",
        "#4F726C",
        "#00AA90",
        "#69B0AC"
    ],
    [
        "#0F4C3A",
        "#4F726C",
        "#00AA90",
        "#69B0AC",
        "#26453D"
    ],
    [
        "#4F726C",
        "#00AA90",
        "#69B0AC",
        "#26453D",
        "#66BAB7"
    ],
    [
        "#00AA90",
        "#69B0AC",
        "#26453D",
        "#66BAB7",
        "#268785"
    ],
    [
        "#69B0AC",
        "#26453D",
        "#66BAB7",
        "#268785",
        "#405B55"
    ],
    [
        "#26453D",
        "#66BAB7",
        "#268785",
        "#405B55",
        "#305A56"
    ],
    [
        "#66BAB7",
        "#268785",
        "#405B55",
        "#305A56",
        "#78C2C4"
    ],
    [
        "#268785",
        "#405B55",
        "#305A56",
        "#78C2C4",
        "#376B6D"
    ],
    [
        "#405B55",
        "#305A56",
        "#78C2C4",
        "#376B6D",
        "#A5DEE4"
    ],
    [
        "#305A56",
        "#78C2C4",
        "#376B6D",
        "#A5DEE4",
        "#77969A"
    ],
    [
        "#78C2C4",
        "#376B6D",
        "#A5DEE4",
        "#77969A",
        "#6699A1"
    ],
    [
        "#376B6D",
        "#A5DEE4",
        "#77969A",
        "#6699A1",
        "#81C7D4"
    ],
    [
        "#A5DEE4",
        "#77969A",
        "#6699A1",
        "#81C7D4",
        "#33A6B8"
    ],
    [
        "#77969A",
        "#6699A1",
        "#81C7D4",
        "#33A6B8",
        "#0C4842"
    ],
    [
        "#6699A1",
        "#81C7D4",
        "#33A6B8",
        "#0C4842",
        "#0D5661"
    ],
    [
        "#81C7D4",
        "#33A6B8",
        "#0C4842",
        "#0D5661",
        "#0089A7"
    ],
    [
        "#33A6B8",
        "#0C4842",
        "#0D5661",
        "#0089A7",
        "#336774"
    ],
    [
        "#0C4842",
        "#0D5661",
        "#0089A7",
        "#336774",
        "#255359"
    ],
    [
        "#0D5661",
        "#0089A7",
        "#336774",
        "#255359",
        "#1E88A8"
    ],
    [
        "#0089A7",
        "#336774",
        "#255359",
        "#1E88A8",
        "#566C73"
    ],
    [
        "#336774",
        "#255359",
        "#1E88A8",
        "#566C73",
        "#577C8A"
    ],
    [
        "#255359",
        "#1E88A8",
        "#566C73",
        "#577C8A",
        "#58B2DC"
    ],
    [
        "#1E88A8",
        "#566C73",
        "#577C8A",
        "#58B2DC",
        "#2B5F75"
    ],
    [
        "#566C73",
        "#577C8A",
        "#58B2DC",
        "#2B5F75",
        "#3A8FB7"
    ],
    [
        "#577C8A",
        "#58B2DC",
        "#2B5F75",
        "#3A8FB7",
        "#2E5C6E"
    ],
    [
        "#58B2DC",
        "#2B5F75",
        "#3A8FB7",
        "#2E5C6E",
        "#006284"
    ],
    [
        "#2B5F75",
        "#3A8FB7",
        "#2E5C6E",
        "#006284",
        "#7DB9DE"
    ],
    [
        "#3A8FB7",
        "#2E5C6E",
        "#006284",
        "#7DB9DE",
        "#51A8DD"
    ],
    [
        "#2E5C6E",
        "#006284",
        "#7DB9DE",
        "#51A8DD",
        "#2EA9DF"
    ],
    [
        "#006284",
        "#7DB9DE",
        "#51A8DD",
        "#2EA9DF",
        "#0B1013"
    ],
    [
        "#7DB9DE",
        "#51A8DD",
        "#2EA9DF",
        "#0B1013",
        "#0F2540"
    ],
    [
        "#51A8DD",
        "#2EA9DF",
        "#0B1013",
        "#0F2540",
        "#08192D"
    ],
    [
        "#2EA9DF",
        "#0B1013",
        "#0F2540",
        "#08192D",
        "#005CAF"
    ],
    [
        "#0B1013",
        "#0F2540",
        "#08192D",
        "#005CAF",
        "#0B346E"
    ],
    [
        "#0F2540",
        "#08192D",
        "#005CAF",
        "#0B346E",
        "#7B90D2"
    ],
    [
        "#08192D",
        "#005CAF",
        "#0B346E",
        "#7B90D2",
        "#6E75A4"
    ],
    [
        "#005CAF",
        "#0B346E",
        "#7B90D2",
        "#6E75A4",
        "#261E47"
    ],
    [
        "#0B346E",
        "#7B90D2",
        "#6E75A4",
        "#261E47",
        "#113285"
    ],
    [
        "#7B90D2",
        "#6E75A4",
        "#261E47",
        "#113285",
        "#4E4F97"
    ],
    [
        "#6E75A4",
        "#261E47",
        "#113285",
        "#4E4F97",
        "#211E55"
    ],
    [
        "#261E47",
        "#113285",
        "#4E4F97",
        "#211E55",
        "#8B81C3"
    ],
    [
        "#113285",
        "#4E4F97",
        "#211E55",
        "#8B81C3",
        "#70649A"
    ],
    [
        "#4E4F97",
        "#211E55",
        "#8B81C3",
        "#70649A",
        "#9B90C2"
    ],
    [
        "#211E55",
        "#8B81C3",
        "#70649A",
        "#9B90C2",
        "#8A6BBE"
    ],
    [
        "#8B81C3",
        "#70649A",
        "#9B90C2",
        "#8A6BBE",
        "#6A4C9C"
    ],
    [
        "#70649A",
        "#9B90C2",
        "#8A6BBE",
        "#6A4C9C",
        "#8F77B5"
    ],
    [
        "#9B90C2",
        "#8A6BBE",
        "#6A4C9C",
        "#8F77B5",
        "#533D5B"
    ],
    [
        "#8A6BBE",
        "#6A4C9C",
        "#8F77B5",
        "#533D5B",
        "#B28FCE"
    ],
    [
        "#6A4C9C",
        "#8F77B5",
        "#533D5B",
        "#B28FCE",
        "#986DB2"
    ],
    [
        "#8F77B5",
        "#533D5B",
        "#B28FCE",
        "#986DB2",
        "#77428D"
    ],
    [
        "#533D5B",
        "#B28FCE",
        "#986DB2",
        "#77428D",
        "#3C2F41"
    ],
    [
        "#B28FCE",
        "#986DB2",
        "#77428D",
        "#3C2F41",
        "#4A225D"
    ],
    [
        "#986DB2",
        "#77428D",
        "#3C2F41",
        "#4A225D",
        "#66327C"
    ],
    [
        "#77428D",
        "#3C2F41",
        "#4A225D",
        "#66327C",
        "#592C63"
    ],
    [
        "#3C2F41",
        "#4A225D",
        "#66327C",
        "#592C63",
        "#6F3381"
    ],
    [
        "#4A225D",
        "#66327C",
        "#592C63",
        "#6F3381",
        "#574C57"
    ],
    [
        "#66327C",
        "#592C63",
        "#6F3381",
        "#574C57",
        "#B481BB"
    ],
    [
        "#592C63",
        "#6F3381",
        "#574C57",
        "#B481BB",
        "#3F2B36"
    ],
    [
        "#6F3381",
        "#574C57",
        "#B481BB",
        "#3F2B36",
        "#572A3F"
    ],
    [
        "#574C57",
        "#B481BB",
        "#3F2B36",
        "#572A3F",
        "#5E3D50"
    ],
    [
        "#B481BB",
        "#3F2B36",
        "#572A3F",
        "#5E3D50",
        "#72636E"
    ],
    [
        "#3F2B36",
        "#572A3F",
        "#5E3D50",
        "#72636E",
        "#622954"
    ],
    [
        "#572A3F",
        "#5E3D50",
        "#72636E",
        "#622954",
        "#6D2E5B"
    ],
    [
        "#5E3D50",
        "#72636E",
        "#622954",
        "#6D2E5B",
        "#C1328E"
    ],
    [
        "#72636E",
        "#622954",
        "#6D2E5B",
        "#C1328E",
        "#A8497A"
    ],
    [
        "#622954",
        "#6D2E5B",
        "#C1328E",
        "#A8497A",
        "#562E37"
    ],
    [
        "#6D2E5B",
        "#C1328E",
        "#A8497A",
        "#562E37",
        "#E03C8A"
    ],
    [
        "#C1328E",
        "#A8497A",
        "#562E37",
        "#E03C8A",
        "#60373E"
    ],
    [
        "#A8497A",
        "#562E37",
        "#E03C8A",
        "#60373E",
        "#FCFAF2"
    ],
    [
        "#562E37",
        "#E03C8A",
        "#60373E",
        "#FCFAF2",
        "#FFFFFB"
    ],
    [
        "#E03C8A",
        "#60373E",
        "#FCFAF2",
        "#FFFFFB",
        "#BDC0BA"
    ],
    [
        "#60373E",
        "#FCFAF2",
        "#FFFFFB",
        "#BDC0BA",
        "#91989F"
    ],
    [
        "#FCFAF2",
        "#FFFFFB",
        "#BDC0BA",
        "#91989F",
        "#787878"
    ],
    [
        "#FFFFFB",
        "#BDC0BA",
        "#91989F",
        "#787878",
        "#828282"
    ],
    [
        "#BDC0BA",
        "#91989F",
        "#787878",
        "#828282",
        "#787D7B"
    ],
    [
        "#91989F",
        "#787878",
        "#828282",
        "#787D7B",
        "#707C74"
    ],
    [
        "#787878",
        "#828282",
        "#787D7B",
        "#707C74",
        "#656765"
    ],
    [
        "#828282",
        "#787D7B",
        "#707C74",
        "#656765",
        "#535953"
    ],
    [
        "#787D7B",
        "#707C74",
        "#656765",
        "#535953",
        "#4F4F48"
    ],
    [
        "#707C74",
        "#656765",
        "#535953",
        "#4F4F48",
        "#52433D"
    ],
    [
        "#656765",
        "#535953",
        "#4F4F48",
        "#52433D",
        "#373C38"
    ],
    [
        "#535953",
        "#4F4F48",
        "#52433D",
        "#373C38",
        "#3A3226"
    ],
    [
        "#4F4F48",
        "#52433D",
        "#373C38",
        "#3A3226",
        "#434343"
    ],
    [
        "#52433D",
        "#373C38",
        "#3A3226",
        "#434343",
        "#1C1C1C"
    ],
    [
        "#373C38",
        "#3A3226",
        "#434343",
        "#1C1C1C",
        "#080808"
    ],
];