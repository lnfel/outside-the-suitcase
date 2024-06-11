export const load = async ({ parent, params }) => {
    const { f2p, ffa } = await parent()
    const raidGroup: Sheet.RaidTitle[] = Object.keys(f2p) as Sheet.RaidTitle[]
    const raid = raidGroup.find((raid) => raid.toLowerCase().split(" ").join("-") === params.raid)
    const headers = [
        "Rank",
        "Username",
        "Score",
        "Team",
        "Entry Tag",
        "Entry Date",
    ]
    const characterMap: Record<string, { thumbnail: string }> = {
        "37": {
            thumbnail: "https://www.prydwen.gg/static/a9df0a9f798cde750e47fe7b40c4cb61/60b4d/64_icon.webp"
        },
        "6": {
            thumbnail: "https://www.prydwen.gg/static/c3b16c3397767b4737aa9bb4ff4ffafc/60b4d/65_icon.webp"
        },
        "A Knight": {
            thumbnail: "https://www.prydwen.gg/static/12a9276bf3b49bb3cdde0543129d129f/60b4d/7_icon.webp"
        },
        "Lilya": {
            thumbnail: "https://www.prydwen.gg/static/54312ecf859812f00722a142e9f6a8a2/60b4d/4_icon.webp"
        },
        "Regulus": {
            thumbnail: "https://www.prydwen.gg/static/7837f8320689ec0c511ca55ac3f48fbf/60b4d/3_icon.webp"
        },
        "Tooth Fairy": {
            thumbnail: "https://www.prydwen.gg/static/dffcad8d709f386addef5085f913fa0e/60b4d/56_icon.webp"
        },
        "Kaalaa Baunaa": {
            thumbnail: "https://www.prydwen.gg/static/c746ac1cf15c943191df0b3f0938dec9/60b4d/62_icon.webp"
        },
        "Pickles": {
            thumbnail: "https://www.prydwen.gg/static/b2f0e0c2a66f1d950723a013bb843f4e/60b4d/54_icon.webp"
        },
        "Necrologist": {
            thumbnail: "https://www.prydwen.gg/static/44afab4c5d9e66ecb0f48194fbde44ba/60b4d/20_icon.webp"
        },
        "Balloon Party": {
            thumbnail: "https://www.prydwen.gg/static/7c5aacbd1d7debf7b5e171ef5b8eb21d/60b4d/19_icon.webp"
        },
        "Bkornblume": {
            thumbnail: "https://www.prydwen.gg/static/f5c8a1e76ffa90a6a3cc1628543264e7/60b4d/16_icon.webp"
        },
        "Spathodea": {
            thumbnail: "https://www.prydwen.gg/static/dbceab4cd300e4d053571a25c9ace92b/60b4d/65_icon.webp"
        },
        "Sweetheart": {
            thumbnail: "https://www.prydwen.gg/static/ebe0a115613ed47b1bb61dda6861207d/60b4d/13_icon.webp"
        },
        "Melania": {
            thumbnail: "https://www.prydwen.gg/static/4abbfd75d20606a1f0b2f2eb6ada77a2/60b4d/53_icon.webp"
        },
        "Jessica": {
            thumbnail: "https://www.prydwen.gg/static/d1016961dc8a59f5bc3a3d6d62ba841b/60b4d/58_icon.webp"
        },
        "Jiu Niangzi": {
            thumbnail: "https://www.prydwen.gg/static/865bb8cb048103c43d16b2d45d000a4e/60b4d/69_icon.webp"
        },
        "An-an Lee": {
            thumbnail: "https://www.prydwen.gg/static/0b86bc3c4710ab7fb76f3c30adfd1283/60b4d/0_icon.webp"
        },
        "Ms. NewBabel": {
            thumbnail: "https://www.prydwen.gg/static/ac2895e23af4900d682d5fd3ebfd2bda/60b4d/11_icon.webp"
        },
        "Ezra": {
            thumbnail: "https://www.prydwen.gg/static/8069d3e37cdd5917d78f9bd188c5e4b3/60b4d/66_icon.webp"
        },
        "Shamane": {
            thumbnail: "https://www.prydwen.gg/static/141d00528dcb72b350cfc725386985fa/60b4d/60_icon.webp"
        },
        "Leilani": {
            thumbnail: "https://www.prydwen.gg/static/30e7f4de8a38e2c4e5fb61ee96527b52/60b4d/41_icon.webp"
        },
        "Darley Clatter": {
            thumbnail: "https://www.prydwen.gg/static/e2d29a713c58c599f6a55423eb08e5fa/60b4d/45_icon.webp"
        }
    }

    return {
        raid,
        headers,
        characterMap,
        categories: ['f2p', 'ffa']
    }
}
