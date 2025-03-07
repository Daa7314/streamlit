/**
 * @license
 * Copyright 2018-2022 Streamlit Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import styled from "@emotion/styled"

export const StyledAlertContent = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing.sm,

  // If an icon is present, nudge the <EmojiIcon /> component
  // a bit so it's aligned with the start of the text.
  "& > span": {
    position: "relative",
    top: "2px",
  },

  pre: {
    backgroundColor: theme.colors.transparent,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
    paddingLeft: theme.spacing.lg,
    border: `1px solid ${theme.colors.fadedText10}`,

    "pre, code": {
      backgroundColor: theme.colors.transparent,
      color: "inherit",
    },
  },

  code: {
    backgroundColor: theme.colors.transparent,
    padding: theme.spacing.none,
  },

  "pre, code": {
    color: "inherit",
  },

  a: {
    color: "inherit",
    textDecoration: "underline",
  },
}))
