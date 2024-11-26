// Generated from src/grammar/CEL.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { StartContext } from "./CELParser.js";
import { ExprContext } from "./CELParser.js";
import { ConditionalOrContext } from "./CELParser.js";
import { ConditionalAndContext } from "./CELParser.js";
import { RelationOpContext } from "./CELParser.js";
import { RelationCalcContext } from "./CELParser.js";
import { CalcMulDivContext } from "./CELParser.js";
import { CalcUnaryContext } from "./CELParser.js";
import { CalcAddSubContext } from "./CELParser.js";
import { MemberExprContext } from "./CELParser.js";
import { LogicalNotContext } from "./CELParser.js";
import { NegateContext } from "./CELParser.js";
import { SelectOrCallContext } from "./CELParser.js";
import { PrimaryExprContext } from "./CELParser.js";
import { IndexContext } from "./CELParser.js";
import { CreateMessageContext } from "./CELParser.js";
import { IdentOrGlobalCallContext } from "./CELParser.js";
import { NestedContext } from "./CELParser.js";
import { CreateListContext } from "./CELParser.js";
import { CreateStructContext } from "./CELParser.js";
import { ConstantLiteralContext } from "./CELParser.js";
import { ExprListContext } from "./CELParser.js";
import { FieldInitializerListContext } from "./CELParser.js";
import { MapInitializerListContext } from "./CELParser.js";
import { IntContext } from "./CELParser.js";
import { UintContext } from "./CELParser.js";
import { DoubleContext } from "./CELParser.js";
import { StringContext } from "./CELParser.js";
import { BytesContext } from "./CELParser.js";
import { BoolTrueContext } from "./CELParser.js";
import { BoolFalseContext } from "./CELParser.js";
import { NullContext } from "./CELParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CELParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class CELVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CELParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;
	/**
	 * Visit a parse tree produced by `CELParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;
	/**
	 * Visit a parse tree produced by `CELParser.conditionalOr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalOr?: (ctx: ConditionalOrContext) => Result;
	/**
	 * Visit a parse tree produced by `CELParser.conditionalAnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalAnd?: (ctx: ConditionalAndContext) => Result;
	/**
	 * Visit a parse tree produced by the `RelationOp`
	 * labeled alternative in `CELParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationOp?: (ctx: RelationOpContext) => Result;
	/**
	 * Visit a parse tree produced by the `RelationCalc`
	 * labeled alternative in `CELParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationCalc?: (ctx: RelationCalcContext) => Result;
	/**
	 * Visit a parse tree produced by the `CalcMulDiv`
	 * labeled alternative in `CELParser.calc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalcMulDiv?: (ctx: CalcMulDivContext) => Result;
	/**
	 * Visit a parse tree produced by the `CalcUnary`
	 * labeled alternative in `CELParser.calc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalcUnary?: (ctx: CalcUnaryContext) => Result;
	/**
	 * Visit a parse tree produced by the `CalcAddSub`
	 * labeled alternative in `CELParser.calc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalcAddSub?: (ctx: CalcAddSubContext) => Result;
	/**
	 * Visit a parse tree produced by the `MemberExpr`
	 * labeled alternative in `CELParser.unary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberExpr?: (ctx: MemberExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `LogicalNot`
	 * labeled alternative in `CELParser.unary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;
	/**
	 * Visit a parse tree produced by the `Negate`
	 * labeled alternative in `CELParser.unary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegate?: (ctx: NegateContext) => Result;
	/**
	 * Visit a parse tree produced by the `SelectOrCall`
	 * labeled alternative in `CELParser.member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectOrCall?: (ctx: SelectOrCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `PrimaryExpr`
	 * labeled alternative in `CELParser.member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `Index`
	 * labeled alternative in `CELParser.member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex?: (ctx: IndexContext) => Result;
	/**
	 * Visit a parse tree produced by the `CreateMessage`
	 * labeled alternative in `CELParser.member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMessage?: (ctx: CreateMessageContext) => Result;
	/**
	 * Visit a parse tree produced by the `IdentOrGlobalCall`
	 * labeled alternative in `CELParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentOrGlobalCall?: (ctx: IdentOrGlobalCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `Nested`
	 * labeled alternative in `CELParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNested?: (ctx: NestedContext) => Result;
	/**
	 * Visit a parse tree produced by the `CreateList`
	 * labeled alternative in `CELParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateList?: (ctx: CreateListContext) => Result;
	/**
	 * Visit a parse tree produced by the `CreateStruct`
	 * labeled alternative in `CELParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateStruct?: (ctx: CreateStructContext) => Result;
	/**
	 * Visit a parse tree produced by the `ConstantLiteral`
	 * labeled alternative in `CELParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantLiteral?: (ctx: ConstantLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `CELParser.exprList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprList?: (ctx: ExprListContext) => Result;
	/**
	 * Visit a parse tree produced by `CELParser.fieldInitializerList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldInitializerList?: (ctx: FieldInitializerListContext) => Result;
	/**
	 * Visit a parse tree produced by `CELParser.mapInitializerList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapInitializerList?: (ctx: MapInitializerListContext) => Result;
	/**
	 * Visit a parse tree produced by the `Int`
	 * labeled alternative in `CELParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;
	/**
	 * Visit a parse tree produced by the `Uint`
	 * labeled alternative in `CELParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUint?: (ctx: UintContext) => Result;
	/**
	 * Visit a parse tree produced by the `Double`
	 * labeled alternative in `CELParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDouble?: (ctx: DoubleContext) => Result;
	/**
	 * Visit a parse tree produced by the `String`
	 * labeled alternative in `CELParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
	/**
	 * Visit a parse tree produced by the `Bytes`
	 * labeled alternative in `CELParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBytes?: (ctx: BytesContext) => Result;
	/**
	 * Visit a parse tree produced by the `BoolTrue`
	 * labeled alternative in `CELParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolTrue?: (ctx: BoolTrueContext) => Result;
	/**
	 * Visit a parse tree produced by the `BoolFalse`
	 * labeled alternative in `CELParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolFalse?: (ctx: BoolFalseContext) => Result;
	/**
	 * Visit a parse tree produced by the `Null`
	 * labeled alternative in `CELParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull?: (ctx: NullContext) => Result;
}

