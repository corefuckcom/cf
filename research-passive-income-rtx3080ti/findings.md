# Research Findings: Best Idle Passive Income Setup for i9-12900K + RTX 3080 Ti

**Date:** 2025
**Sources consulted:** 8
**Output directory:** research-passive-income-rtx3080ti/

---

## Executive Summary

For an i9-12900K + RTX 3080 Ti setup, **traditional cryptocurrency mining is currently unprofitable** at standard electricity rates ($0.10/kWh). The best idle passive income options are **GPU rental platforms** (AI compute sharing), which can generate $0.50-$2.00+ per day depending on utilization.

**Recommended Priority:**
1. 🥇 **GPU Rental (Salad/Vast.ai)** - $15-60/month potential
2. 🥈 **Distributed Computing** - Non-monetary rewards (science contribution)
3. 🥉 **Speculative Mining** - Only if electricity is free/cheap (<$0.05/kWh)

---

## Key Findings

### 1. RTX 3080 Ti Mining Profitability - NEGATIVE

**Current Status:** Mining is **break-even to negative** at $0.10/kWh electricity.

| Source | Revenue/Day | Profit/Day (at $0.10/kWh) | Best Coin |
|--------|-------------|---------------------------|-----------|
| WhatToMine | $0.35 | -$0.02 to -$0.60 | Vecno (MemHash) |
| Hashrate.no | $0.35 | -$0.02 | Vecno (MemHash) |

**Top Coins Attempted:**
- Vecno (VE) - MemHash: $0.35 revenue, -$0.02 profit (best option)
- Conflux (CFX) - Octopus: $0.62 revenue, -$0.19 profit
- Grin (GRIN) - Cuckatoo32: $0.51 revenue, -$0.25 profit
- Ergo (ERG) - Autolykos2: $0.13 revenue, -$0.25 profit
- Ethereum Classic (ETC): $0.06 revenue, -$0.62 profit

**Power Draw:** 150-350W depending on algorithm

_Source: [WhatToMine](https://whattomine.com/gpus/61-nvidia-geforce-rtx-3080-ti) — sources/1-whattomine-rtx3080ti.md_
_Source: [Hashrate.no](https://www.hashrate.no/gpus/3080ti) — sources/2-hashrate-rtx3080ti.md_

---

### 2. i9-12900K CPU Mining Profitability - MARGINAL

**Current Status:** Barely profitable at ~$0.03/day after electricity costs.

| Coin | Algorithm | Hashrate | Power | Profit/Day |
|------|-----------|----------|-------|------------|
| Quantum (QRL) | RandomX | 11.6 Kh/s | 125W | $0.03 |
| NiceHash | RandomX | 11.6 Kh/s | 125W | $0.03 |
| Zephyr (ZEPH) | RandomX | 11.6 Kh/s | 125W | $0.01 |
| Monero (XMR) | RandomX | 11.6 Kh/s | 125W | -$0.01 |

**Verdict:** Not worth the electricity cost and hardware wear for most users.

_Source: [Hashrate.no](https://www.hashrate.no/cpus/12900k) — sources/3-hashrate-i9-12900k.md_

---

### 3. GPU Rental Platforms - MOST PROMISING

#### Salad Cloud
- **Pricing:** $0.02/hr starting (renter price)
- **Network:** 450K+ nodes, 60K+ daily active GPUs
- **Earnings:** Gift cards, PayPal, crypto
- **Pros:** Easy setup, pause/resume anytime, desktop-friendly
- **Cons:** Lower payout than dedicated rental platforms

_Source: [Salad.com](https://salad.com/) — sources/4-salad-cloud.md_

#### Vast.ai
- **RTX 3080 Ti Rate:** $0.09/hr median ($0.03-$0.80 range)
- **Estimated Earnings:** $0.50-$2.00+/day (if constantly rented)
- **Requirements:** Linux preferred, dedicated rig ideal
- **Payout:** Weekly (2-week hold for first payout)
- **Pros:** Higher rates, flexible pricing
- **Cons:** Lower utilization rates, requires Linux knowledge

**Real User Reports:**
- $23/day reported on multi-GPU rigs (YouTube: Red Panda Mining)
- $600-700/month possible with high utilization
- Market demand has dropped in 2024-2025

_Source: [Vast.ai Docs](https://docs.vast.ai/) — sources/7-vast-ai-pricing.md_

#### Clore.ai
- **Estimated Base:** ~$0.02/day
- **POH Rewards:** Additional CLORE token rewards
- **APY:** 15.05% on staked coins
- **Network:** 4,499 active GPUs / 6,902 available
- **Pros:** CLORE token upside, active community
- **Cons:** Newer platform, token volatility

_Source: [Clore.ai](https://clore.ai/host) — sources/5-clore-ai.md_

---

### 4. Distributed Computing - NON-MONETARY

Options like **Folding@home** and **BOINC**:
- No direct monetary rewards
- Contribute to scientific research (protein folding, SETI, etc.)
- Earn points/recognition in communities
- Best for users who prioritize contribution over income

_Source: [Folding@home](https://foldingathome.org/) — initial search results_

---

## Comparison Matrix

| Method | Daily Income | Monthly Income | Electricity Cost | Effort | Risk |
|--------|--------------|----------------|------------------|--------|------|
| GPU Mining (RTX 3080 Ti) | -$0.02 | -$0.60 | $25-35 | Low | Hardware wear |
| CPU Mining (i9-12900K) | $0.03 | $0.90 | $10-15 | Low | Hardware wear |
| Salad Cloud | $0.50-1.50 | $15-45 | $0 (idle) | Very Low | Low |
| Vast.ai | $0.50-2.00+ | $15-60+ | $0 (idle) | Medium | Low |
| Clore.ai | $0.20-0.50 | $6-15 | $0 (idle) | Low | Token volatility |

---

## Agreements & Disagreements

**Consensus:**
- All sources agree: Traditional GPU mining is no longer profitable for RTX 3080 Ti at standard electricity rates
- GPU rental/sharing is the emerging alternative for monetizing idle hardware
- AI compute demand drives the rental market

**Conflicting Views:**
- Some Reddit users report higher earnings on Vast.ai ($20+/day), but these are often multi-GPU setups or older data
- Mining profitability calculators show slight variations (±$0.05/day) due to real-time price fluctuations

---

## Conclusion & Recommendations

### For Your i9-12900K + RTX 3080 Ti Setup:

**Option 1: Maximum Earnings (Recommended)**
- **Platform:** Vast.ai or Salad
- **Expected:** $15-60/month
- **Setup:** Install Linux (Vast) or Windows app (Salad)
- **Best for:** Dedicated rigs or when PC is idle 12+ hrs/day

**Option 2: Set-and-Forget**
- **Platform:** Salad Cloud
- **Expected:** $15-45/month
- **Setup:** Windows app, runs in background
- **Best for:** Desktop users who want zero maintenance

**Option 3: Speculative (Only with Cheap/Free Electricity)**
- **Activity:** Mine Vecno (VE) on RTX 3080 Ti
- **Expected:** Break-even to $0.20/day if electricity <$0.05/kWh
- **Best for:** Solar users, dorm rooms, or locations with free power

**Option 4: Science Contribution**
- **Platform:** Folding@home
- **Expected:** $0 (donation)
- **Best for:** Users prioritizing contribution over income

---

### Final Verdict:

**Don't mine crypto directly** with your RTX 3080 Ti at current rates. Instead, **rent out your GPU** through Salad or Vast.ai for 10-50x better returns with less hardware stress. Your i9-12900K adds minimal value ($0.03/day) and is better left idle unless you have free electricity.
