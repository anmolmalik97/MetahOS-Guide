---
sidebar_position: 52
---

# Forcing Consolidated Report Messages

When MetahOS sends consolidated camp reports to beneficiaries, those messages normally pass through the platform's standard messaging eligibility checks (for example consent and opt-out rules). In some camp programmes it is necessary to ensure the **health report message is always delivered** to every beneficiary, regardless of those general checks.

MetahOS provides a configuration flag for exactly this case.

## At a glance

```steps
fa-file-text-o | Consolidated report | We make a neat report to share.
fa-cog | Force-allow flag? | Here is what happens at this step.
fa-filter | Standard checks | Here is what happens at this step.
fa-check | Allowed? | Here is what happens at this step.
fa-times | Blocked | Here is what happens at this step.
fa-key | Force-allow message | Here is what happens at this step.
fa-whatsapp | Report delivered | We make a neat report to share.
```

## What the flag does

The **`forceAllowParticularMessageForConsolidatedReport`** flag, when enabled, tells MetahOS to **force-allow** the consolidated report message during both the [bulk send](./consolidated-reports.md) and individual report-send flows. With it on:

- The consolidated report message (and its regional-language variant) is allowed through even when it might otherwise be filtered by the platform's general messaging eligibility checks.
- The report PDF is still attached and sent through the same templates as usual.

When the flag is **off** (the default), consolidated report messages follow the normal messaging rules.

## When to use it

Enable this only for programmes where delivering the health report to the beneficiary is a required outcome of the camp — for example government or partner-mandated screening drives where every participant must receive their report.

:::caution
This flag overrides the usual messaging safeguards for the consolidated report message specifically. Turn it on only when your programme requires guaranteed delivery of the report, and make sure beneficiaries are aware they will receive their report by message.
:::
