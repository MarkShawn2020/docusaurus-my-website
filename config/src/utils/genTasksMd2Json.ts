/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { promises as fs } from "fs";

import path from "path";

import _ from "lodash";

import { TaskStatus } from "../../../src/ds/task";

import { meCustom } from "../me";

import type { ITask } from "../../../src/ds/task";

const todoFilePath = path.join(meCustom.projectDocumentsPath, 'TODO.md')
console.log(`read todo from file://${todoFilePath}`)

export interface ITaskFromMD {
  sDate: string
  eDate: string
  category: string
  title: string
  priority: number
  status: string
  reason: string
  detail: string
}



export const genTasksMd2Json = async (): Promise<ITask[]> => {
  const content = await fs.readFile(todoFilePath, 'utf-8')
  let colNames: string[] = []
  const tasks: ITask[] = []
  let matchedLines: number = 0
  // console.log({content})
  content
    .split('\n')
    .forEach(line => {
      if (/^\|.*/.test(line)) {
        const matchedCells = line.split('|').filter(Boolean).map(_.trim)
        if (matchedLines === 0) {
          colNames = matchedCells
        } else if (matchedLines > 1) {
          const taskObj = _.zipObject(colNames, matchedCells) as unknown as ITaskFromMD
          const task: ITask = {
            ...taskObj,
            dates: [new Date(taskObj.sDate), new Date(taskObj.eDate)],
            tags: [taskObj.category],
            status: TaskStatus[taskObj.status]
          }
          tasks.push(task)
        }

        matchedLines += 1
      }
    })

  return tasks
}

export default genTasksMd2Json
