// Data model descriptions for Birthday Planner

/**
 * Guest
 * {
 *   id: number,
 *   name: string,
 *   email: string,
 *   rsvp: 'yes' | 'no' | 'maybe',
 *   plusOne: boolean,
 *   notes: string
 * }
 *
 * Task
 * {
 *   id: number,
 *   title: string,
 *   description?: string,
 *   assignedTo?: number, // guest id
 *   dueDate?: string (ISO date),
 *   completed: boolean
 * }
 *
 * BudgetItem
 * {
 *   id: number,
 *   description: string,
 *   amount: number,
 *   category?: string
 * }
 *
 * Event
 * {
 *   id: number,
 *   date: string (ISO date),
 *   venue?: string,
 *   schedule: [{ time: string, activity: string }]
 * }
 */

module.exports = {};
